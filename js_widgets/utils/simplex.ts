const tol: number = 1e-6;

export interface ConstraintInterface {
    lower: number | undefined;
    a: number;
    b: number;
    upper: number | undefined;
    label: String;
};

export class Constraint {
    lower: number | undefined;
    a: number;
    b: number;
    upper: number | undefined;
    label: String;

    constructor({lower, a, b, upper, label}: ConstraintInterface){
        
        if(upper === undefined && lower === undefined){
            throw "Both sides of the constraint cannot be undefined";
        }

        if(upper !== undefined && lower !== undefined){
            throw "Only one constraint at a time is allowed";
        }

        this.lower = lower;
        this.a = a;
        this.b = b;
        this.upper = upper;
        this.label = label;
    }
};

export class SimplexTableau {
    tableau: number[][] = [];
    numSlacks: number = 0;
    dimension: number;
    rhsCol: number;

    basis: number[];
    dictionary: number[];
    
    constructor(constraints: Constraint[]) {
        this.dimension = 2;
        this.numSlacks = this.calculate_num_slacks(constraints);
        this.tableau = this.build(constraints);
        this.basis = [];
        this.dictionary = [];
        this.initBasis();
        this.rhsCol = this.dimension + this.numSlacks;
    }

    clone(): SimplexTableau {
        const t = new SimplexTableau([]);
        t.dimension = this.dimension;
        t.numSlacks = this.numSlacks;
        t.tableau = structuredClone(this.tableau);
        t.basis = structuredClone(this.basis);
        t.dictionary = structuredClone(this.dictionary);
        t.rhsCol = this.rhsCol;
        return t;
    }

    private calculate_num_slacks(constraints: Constraint[]): number {

        let numSlacks: number = 0;
        
        for (const c of constraints) {
            if (c.upper !== undefined) {
                numSlacks++;
            }
            if (c.lower !== undefined) {
                numSlacks++;
            }
        }

        return numSlacks;
    }

    private build(constraints: Constraint[]) {
        const rows: number[][] = [];

        let count: number = 0;
        for (const c of constraints) {
            if (c.upper !== undefined) {
                rows.push(this.makeRow(c.a, c.b, +1, c.upper, count));
                count++;
            }
            if (c.lower !== undefined) {
                rows.push(this.makeRow(c.a, c.b, -1, c.lower, count));
                count++;
            }
        }

        return rows;
    }

    private initBasis() {
        const numVars = this.dimension + this.numSlacks;

        // slack variables are basic
        for (let i = 0; i < this.dimension; i++) {
            this.basis.push(i);
        }

        // decision variables are non-basic
        for (let j = this.dimension; j < numVars; j++) {
            this.dictionary.push(j);
        }
    }

    private makeRow(a: number, b: number, slackSign: 1 | -1, rhs: number, count: number): number[] {
        const dimensions: number = 2;
        const row = new Array(dimensions + 1 + this.numSlacks).fill(0);

        row[0] = a; // x
        row[1] = b; // y
        row[dimensions + count] = slackSign;
        row[dimensions + this.numSlacks] = rhs;

        return row;
    }

    canPivot(incoming: number, outgoing: number): boolean {
        // console.log("canPivot: in/out ", incoming, outgoing);
        // console.log("canPivot: basis/dict ", this.basis, this.dictionary);

        if(incoming === outgoing){
            // console.log("canPivot: NoOp");
            return true;
        }

        if(!this.dictionary.includes(incoming)){
            return false;
        }

        let pivotRow = this.dictionary.indexOf(incoming);
        let pivotCol = outgoing;
        const pivotVal = this.tableau[pivotRow][pivotCol];
        // console.log("canPivot: ", pivotRow, pivotCol, pivotVal);
        return Math.abs(pivotVal) > tol;
    }

    /**
     * Perform a simplex pivot on (row, col)
     * col is with respect to variables[] (not RHS)
     */
    pivot(pivotRow: number, pivotCol: number) {
        // console.log("pivot: ", pivotRow, pivotCol);

        if (pivotCol === this.rhsCol) {
            throw new Error("Cannot pivot on RHS column");
        }

        // The variable in pivotCol is leaving the basis, so it must
        // originally be in the basis
        if(!this.basis.includes(pivotCol)){
            throw new Error("Pivot basis does not include pivoted out variable");
        }

        const pivotVal = this.tableau[pivotRow][pivotCol];
        if (Math.abs(pivotVal) < tol) {
            throw new Error("Invalid pivot (zero entry)");
        }

        // Normalize pivot row
        for (let j = 0; j < this.tableau[pivotRow].length; j++) {
            this.tableau[pivotRow][j] /= pivotVal;
        }

        // Eliminate pivot column from other rows
        for (let i = 0; i < this.tableau.length; i++) {
            if (i === pivotRow) continue;

            const factor = this.tableau[i][pivotCol];
            if (factor === 0) continue;

            for (let j = 0; j < this.tableau[i].length; j++) {
                this.tableau[i][j] -= factor * this.tableau[pivotRow][j];
            }
        }

        // variable entering the basis
        const entering = this.dictionary[pivotRow];
        const i = this.basis.indexOf(pivotCol);
        this.basis[i] = entering;
        this.dictionary[pivotRow] = pivotCol;
    }

    pivotVar(incoming: number, outgoing: number){
        // console.log("pivotVar: in/out", incoming, outgoing);
        // Convert from variable to row. The variable 'incoming' is going to
        // be in the basis next. 'outgoing' is the one being replaced by it

        // No-Op
        if(incoming === outgoing){
            // console.log("canPivot: NoOp");
            return;
        }

        if(!this.basis.includes(outgoing)){
            throw new Error("Pivot basis does not include pivoted out variable");
        }

        if(!this.dictionary.includes(incoming)){
            throw new Error("Pivot dictionary does not include pivoted in variable");
        }

        this.pivot(this.dictionary.indexOf(incoming), outgoing);
    }

    print() {
        console.log("Basis (by column index):", this.basis);
        console.log("Non-basis:", this.dictionary);

        for (const row of this.tableau) {
            console.log(row.map(v => v.toFixed(1)).join(" "));
        }
    }
}

// const constraint1: Constraint = { lower: -2.0, a: 1.0, b: 1.0, upper: undefined};
// const constraint2: Constraint = { lower: undefined, a: -1.0, b: 1.0, upper: 3.0};

// const constraints: Constraint[] = [];
// constraints.push(constraint1);
// constraints.push(constraint2);

// const tableau = new SimplexTableau(constraints);

// tableau.print();
// tableau.pivot(0, 0); // x <-> s1
// tableau.print();