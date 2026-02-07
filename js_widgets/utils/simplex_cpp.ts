export type VectorD = number[];
export type VectorI = number[];
export type Matrix = number[][];

export const tol = 1e-9;

export function is_equal(x: number, y: number): boolean {
    return Math.abs(x - y) < tol;
}

export interface ConstraintInterface {
    lower: number | undefined;
    a: number;
    b: number;
    upper: number | undefined;
    label: String;
};

export class Constraint {
    lower: number | undefined;
    row: VectorD;
    upper: number | undefined;
    label: String;

    constructor({lower, a, b, upper, label}: ConstraintInterface) {
        this.lower = lower;
        this.upper = upper;
        this.row = new Array(2);
        this.row[0] = a;
        this.row[1] = b;
        this.label = label;
    }
}

export type Constraints = Constraint[];

export function gaussian_elimination(
    matrix: Matrix,
    row: number,
    col: number
): void {
    const entry = matrix[row][col];

    if (is_equal(entry, 0)) {
        throw new Error("Gaussian elimination on zero entry");
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    // Normalize pivot row
    for (let j = 0; j < cols; j++) {
        matrix[row][j] /= entry;
    }

    // Eliminate other rows
    for (let i = 0; i < rows; i++) {
        if (i === row) continue;

        const factor = matrix[i][col];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] -= matrix[row][j] * factor;
        }
    }
}


export function index_of(vector: VectorI, val: number): number | undefined {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === val) return i;
    }
    return undefined;
}


export function find_lowest_ratio_row(matrix: Matrix, col: number, num_constraints: number): number | undefined {
    const last_col = matrix[0].length - 1;

    let smallest_ratio: number | undefined = undefined;
    let row: number | undefined = undefined;

    for (let i = 0; i < num_constraints; i++) {
        const entry = matrix[i][col];
        const right = matrix[i][last_col];

        if (entry < tol || right < tol) continue;

        const ratio = right / entry;

        if (smallest_ratio === undefined || ratio < smallest_ratio) {
            smallest_ratio = ratio;
            row = i;
        }
    }

    return row;
}


export class SimplexTableau {
    basis_dimension: number;
    num_constraints: number;
    num_artificial: number;

    basis: VectorI;
    dictionary: VectorI;
    matrix: Matrix;

    dimension: number;
    rhsCol: number;

    constructor(
        matrix: Matrix,
        dimension: number,
        num_constraints: number,
        num_artificial: number
    ) {
        this.dimension = dimension;
        this.basis_dimension = dimension + num_artificial;
        this.num_constraints = num_constraints;
        this.num_artificial = num_artificial;
        this.rhsCol = dimension + num_constraints;

        this.matrix = matrix;

        this.basis = new Array(this.basis_dimension).fill(0);
        this.dictionary = new Array(num_constraints).fill(0);

        for (let i = 0; i < this.basis_dimension; i++) {
            this.basis[i] = i;
        }

        for (let i = 0; i < num_constraints; i++) {
            this.dictionary[i] = i + this.basis_dimension;
        }
    }

    clone(): SimplexTableau {

        const t = new SimplexTableau(structuredClone(this.matrix), this.dimension, this.num_constraints, this.num_artificial);
        t.dimension = this.dimension;
        t.num_constraints = this.num_constraints;
        t.basis = structuredClone(this.basis);
        t.dictionary = structuredClone(this.dictionary);
        t.rhsCol = this.rhsCol;
        return t;
    }

    pivot(row: number, var_out: number): void {
        gaussian_elimination(this.matrix, row, var_out);

        const var_in = this.dictionary[row];
        const basis_index = index_of(this.basis, var_out);

        if (basis_index === undefined) {
            throw new Error("Variable not in basis");
        }

        this.basis[basis_index] = var_in;
        this.dictionary[row] = var_out;
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
        const pivotVal = this.matrix[pivotRow][pivotCol];
        return Math.abs(pivotVal) > tol;
    }

    pivotVar(incoming: number, outgoing: number){
        // Convert from variable to row. The variable 'incoming' is going to
        // be in the basis next. 'outgoing' is the one being replaced by it

        // No-Op
        if(incoming === outgoing){
            return;
        }

        if(!this.basis.includes(outgoing)){
            throw new Error("Pivot basis does not include pivoted out variable");
        }

        if(!this.dictionary.includes(incoming)){
            throw new Error("Pivot dictionary does not include pivoted in variable");
        }

        console.log("vars: ", incoming, outgoing);
        console.log("translation: ", this.dictionary.indexOf(incoming));
        this.pivot(this.dictionary.indexOf(incoming), outgoing);
    }

    simplex_pivot(var_out: number): number | undefined {
        const basis_index = index_of(this.basis, var_out);
        if (basis_index === undefined) {
            throw new Error("Cannot pivot variable not in basis");
        }

        const row = find_lowest_ratio_row(
            this.matrix,
            var_out,
            this.num_constraints
        );

        if (row === undefined) return undefined;
        const incoming = this.dictionary[row!];

        this.pivot(row, var_out);
        return incoming;
    }

    get_cost_function(): VectorD {
        const last_row = this.matrix.length - 1;
        return this.matrix[last_row].slice(0, this.matrix[0].length - 1);
    }

    get_rhs(): VectorD {
        const last_col = this.matrix[0].length - 1;
        return this.matrix.slice(0, this.num_constraints).map(r => r[last_col]);
    }

    get_cost(): number {
        const last_row = this.matrix.length - 1;
        const last_col = this.matrix[0].length - 1;
        return this.matrix[last_row][last_col];
    }

    get_dictionary(): VectorI {
        return [...this.dictionary];
    }

    trim_tableau(): SimplexTableau {
        // Direct translation — unchanged logic

        for (let row = 0; row < this.num_constraints; row++) {
            const v = this.dictionary[row];

            if (is_artificial(v, this.basis_dimension - this.num_artificial, this.num_artificial)) {
                let pivoted = false;

                for (let col = 0; col < this.basis_dimension + this.num_constraints; col++) {
                    const basis_var = this.basis[col];

                    if (is_artificial(basis_var, this.basis_dimension - this.num_artificial, this.num_artificial)) {
                        continue;
                    }

                    const entry = this.matrix[row][col];
                    if (is_equal(entry, 0)) continue;

                    this.pivot(row, basis_var);
                    pivoted = true;
                    break;
                }

                if (!pivoted) {
                    throw new Error("Failed to pivot artificial variable");
                }
            }
        }

        const dimension = this.basis_dimension - this.num_artificial;

        const new_matrix: Matrix = Array.from(
            { length: this.num_constraints + 1 },
            () => new Array(dimension + this.num_constraints + 1).fill(0)
        );

        for (let i = 0; i <= this.num_constraints; i++) {
            for (let j = 0; j < dimension; j++) {
                new_matrix[i][j] = this.matrix[i][j];
            }
            for (let j = 0; j <= this.num_constraints; j++) {
                new_matrix[i][dimension + j] =
                    this.matrix[i][this.basis_dimension + j];
            }
        }

        const new_basis: VectorI = [];
        for (const v of this.basis) {
            if (!is_artificial(v, dimension, this.num_artificial)) {
                new_basis.push(
                    is_slack(v, dimension, this.num_artificial) ? v - this.num_artificial : v
                );
            }
        }

        const new_dictionary: VectorI = [];
        for (const v of this.dictionary) {
            if (is_artificial(v, dimension, this.num_artificial)) {
                throw new Error("Artificial variable in dictionary");
            }
            new_dictionary.push(
                is_slack(v, dimension, this.num_artificial) ? v - this.num_artificial : v
            );
        }

        const t = new SimplexTableau(new_matrix, dimension, this.num_constraints, 0);
        (t as any).basis = new_basis;
        (t as any).dictionary = new_dictionary;

        return t;
    }

    extract_coordinates(){
        const position: number[] = [];
        for(let i=0; i<this.dimension; i++){
            if(this.basis.includes(i)){
                position[i] = 0;
            } else {
                const row = index_of(this.dictionary, i)!;
                position[i] = this.matrix[row][this.rhsCol];
            }
        }
        return position;
    }


    print() {
        console.log("Basis (by column index):", this.basis);
        console.log("Non-basis:", this.dictionary);

        for (const row of this.matrix) {
            console.log(row.map(v => v.toFixed(1)).join(" "));
        }
    }
}

export function find_largest_positive(v: VectorD): number | undefined {
    let upper: number | undefined = undefined;
    let index: number | undefined = undefined;

    for (let i = 0; i < v.length; i++) {
        if (v[i] > tol && (upper === undefined || v[i] > upper)) {
            upper = v[i];
            index = i;
        }
    }

    return index;
}

export function is_artificial(
    i: number,
    num_dimensions: number,
    num_artificial: number
): boolean {
    return i >= num_dimensions && i < num_dimensions + num_artificial;
}

export function is_slack(
    i: number,
    num_dimensions: number,
    num_artificial: number
): boolean {
    return i >= num_dimensions + num_artificial;
}


export function pivot_into_feasible(tableau: SimplexTableau): void {
    for (let i = 0; i < tableau.num_artificial; i++) {
        const j = i + tableau.basis_dimension - tableau.num_artificial;
        tableau.simplex_pivot(j);
    }
}

export function simplex(tableau: SimplexTableau): boolean {
    const rhs = tableau.get_rhs();
    for (const v of rhs) {
        if (v < -tol) throw new Error("Negative RHS");
    }

    while (true) {
        const idx = find_largest_positive(tableau.get_cost_function());
        if (idx === undefined) return true;
        tableau.simplex_pivot(idx);
    }
}

export function solve_lp(constraints: Constraints, cost: VectorD): boolean {
    let tableau = build_tableau(constraints, cost, true);
    pivot_into_feasible(tableau);
    simplex(tableau);

    if (tableau.get_cost() > tol) return false;

    const tableau2 = tableau.trim_tableau();
    simplex(tableau2);

    return false;
}

export function build_tableau(
    constraints: Constraints,
    cost: VectorD, 
    include_artificial: boolean
): SimplexTableau {
    const num_dimensions = cost.length;
    let num_constraints = 0;
    let num_artificial = 0;

    // Count constraints and artificial variables
    for (const c of constraints) {
        const lower = c.lower;
        const upper = c.upper;

        // lower <= row * x
        if (lower !== undefined) {
            num_constraints++;
            if (lower > tol) {
                num_artificial++;
            }
        }

        // row * x <= upper
        if (upper !== undefined) {
            num_constraints++;
            if (upper < -tol) {
                num_artificial++;
            }
        }
    }

    if(!include_artificial){
        num_artificial = 0;
    }

    const rows = num_constraints + 2;
    const cols = num_dimensions + num_constraints + num_artificial + 1;
    const last_col = cols - 1;

    // Allocate matrix filled with zeros
    const matrix: Matrix = Array.from(
        { length: rows },
        () => new Array(cols).fill(0)
    );

    let row_index = 0;
    let artificial_index = 0;

    for (const c of constraints) {
        const lower = c.lower;
        const row = c.row;
        const upper = c.upper;

        // lower <= row * x   →   -row * x <= -lower
        if (lower !== undefined) {
            // matrix.block(row_index, 0, 1, num_dimensions) = -row.transpose();
            for (let j = 0; j < num_dimensions; j++) {
                matrix[row_index][j] = -row[j];
            }

            // slack variable
            matrix[row_index][num_dimensions + num_artificial + row_index] = 1;

            // RHS
            matrix[row_index][last_col] = -lower;

            if (lower > tol) {
                // artificial variable
                if(include_artificial){
                    matrix[row_index][num_dimensions + artificial_index] = -1;
                    artificial_index++;
                }

                // matrix.row(row_index) *= -1
                for (let j = 0; j < cols; j++) {
                    matrix[row_index][j] *= -1;
                }
            }

            row_index++;
        }

        // row * x <= upper
        if (upper !== undefined) {
            // matrix.block(row_index, 0, 1, num_dimensions) = row.transpose();
            for (let j = 0; j < num_dimensions; j++) {
                matrix[row_index][j] = row[j];
            }

            // slack variable
            matrix[row_index][num_dimensions + num_artificial + row_index] = 1;

            // RHS
            matrix[row_index][last_col] = upper;

            if (upper < -tol) {
                // artificial variable
                if(include_artificial){
                    matrix[row_index][num_dimensions + artificial_index] = -1;
                    artificial_index++;
                }

                // matrix.row(row_index) *= -1
                for (let j = 0; j < cols; j++) {
                    matrix[row_index][j] *= -1;
                }
            }

            row_index++;
        }
    }

    // Cost function
    // matrix.block(num_constraints, 0, 1, num_dimensions) = cost.transpose();
    for (let j = 0; j < num_dimensions; j++) {
        matrix[num_constraints][j] = cost[j];
    }

    // Minimize artificial variables: -1s
    // matrix.block(num_constraints+1, num_dimensions, 1, num_artificial) = -1
    for (let j = 0; j < num_artificial; j++) {
        matrix[num_constraints + 1][num_dimensions + j] = -1;
    }

    return new SimplexTableau(
        matrix,
        num_dimensions,
        num_constraints,
        num_artificial
    );
    
}

