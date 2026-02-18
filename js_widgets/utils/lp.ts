import {Graphics, Text, FederatedPointerEvent, ColorSource} from 'pixi.js';
import { SimplexTableau, Constraint, build_tableau, pivot_into_feasible, simplex } from './simplex_cpp';

const tol: number = 1e-7;
const highlightedColor = 0xfc7323;

export class GenericPoint<T extends GenericPoint<T>> {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // return same type as subclass
    add(v: T): T {
        return new (this.constructor as any)(this.x + v.x, this.y + v.y);
    }

    subtract(v: T): T {
        return new (this.constructor as any)(this.x - v.x, this.y - v.y);
    }

    dot(v: T): number {
        return this.x*v.x + this.y*v.y;
    }

    scale(f: number): T {
        return new (this.constructor as any)(this.x * f, this.y * f);
    }

    copy(): T {
        return new (this.constructor as any)(this.x, this.y);
    }
}

export class Point extends GenericPoint<Point> {}
export class PagePoint extends GenericPoint<PagePoint> {}
export class WindowPoint extends GenericPoint<WindowPoint> {}
export class CoordPoint extends GenericPoint<CoordPoint> {}

export class Two {
    newest: number | undefined;
    oldest: number | undefined;
    count: number = 0;
    
    contains(n: number){
        return this.newest === n || this.oldest === n;
    }

    remove(n: number){
        if(this.newest === n){
            this.newest = undefined;
            this.count--;

        } else if(this.oldest === n){
            this.oldest = undefined;
            this.count--;

        } else {
            throw "Tried to remove an element that does not exist"
        }
    }
}

function closestPoint(p1: CoordPoint, p2: CoordPoint, q: CoordPoint){
    // Finds p, the closest point to q lying on the line between p1 and p2

    const u: CoordPoint = p1.subtract(p2);

    // Parametrize p to lie on the line between p1-p2: p = p1 + t*(p1-p2)

    // Find t such that p-q is perpendicular to p1-p2
    const t: number = q.subtract(p1).dot(u)/u.dot(u);

    // Evaluate the parametrization at that value of t
    const p: CoordPoint = p1.add(u.scale(t));

    return p;
}

function intersectDistance(p: CoordPoint, u: CoordPoint, p1: CoordPoint, p2: CoordPoint){
    // Moving along u from the point p, find the distance to the intersection
    // with the line defined by p1 and p2        

    const v: CoordPoint = p2.subtract(p1);
    const vp = new CoordPoint(v.y, -v.x);
    // const up: CoordPoint = {x: u.y, y: -u.x};

    // Intersection: p1 + t*v = p + s*u
    const r: CoordPoint = p.subtract(p1);


    // If the lines are parallel, the intersection is at infinity
    if(Math.abs(u.dot(vp)) < tol){
        return {t: 9999999.0, p: p};
    }

    const t = -r.dot(vp)/u.dot(vp);

    return {t: t, p: p.add(u.scale(t)), u: u};
}

function line_to_points(a: number, b: number, d: number, limits: CoordLimits){

    const {xmin, xmax, ymin, ymax}: CoordLimits = limits;

    // Line: a*x + y*b + d = 0
    let p1: CoordPoint;
    let p2: CoordPoint;
    if(Math.abs(a) < tol){
        p1 = new CoordPoint(xmin, -d/b);
        p2 = new CoordPoint(xmax, -d/b);

    } else if (Math.abs(b) < tol){
        p1 = new CoordPoint(-d/a, ymin);
        p2 = new CoordPoint(-d/a, ymax);

    } else {
        const x1: number = -(d + b*ymin)/a;  // when y = min
        const x2: number = -(d + b*ymax)/a; // when y = max
        const y1: number = -(d + a*xmin)/b;  // when x = min
        const y2: number = -(d + a*xmax)/b; // when x = max

        if(x1 >= xmin && x1 <= xmax){
            p1 = new CoordPoint(x1, ymin);
        } else if(x1 < xmin){
            p1 = new CoordPoint(xmin, y1);
        } else {
            p1 = new CoordPoint(xmax, y2);
        }

        if(x2 >= xmin && x2 <= xmax){
            p2 = new CoordPoint(x2, ymax);
        } else if(x2 < xmin){
            p2 = new CoordPoint(xmin, y1);
        } else {
            p2 = new CoordPoint(xmax, y2);
        }        
    }

    return {p1: p1, p2: p2};
}

export type LineEquation = {
    // a*x + b*y + d = 0
    a: number;
    b: number;
    d: number;
};

export type CoordLimits = {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
};

export class PageToWindow {
    origin: PagePoint;

    constructor(origin: PagePoint){
        this.origin = origin;
    }

    to_window(p: PagePoint): WindowPoint {
        return new WindowPoint(p.x - this.origin.x, this.origin.y - p.y);
    }

    to_page(p: WindowPoint): PagePoint {
        return new PagePoint(p.x + this.origin.x, this.origin.y - p.y);
    }
};

export class WindowToCoord {
    windowBotLeft: WindowPoint;
    windowTopRight: WindowPoint;
    coordBotLeft: CoordPoint;
    coordTopRight: CoordPoint;

    w_width: number;
    w_height: number;
    c_width: number;
    c_height: number;

    constructor(windowBotLeft: WindowPoint, windowTopRight: WindowPoint, coordBotLeft: CoordPoint, coordTopRight: CoordPoint){
        this.windowBotLeft = windowBotLeft;
        this.windowTopRight = windowTopRight;
        this.coordBotLeft = coordBotLeft;
        this.coordTopRight = coordTopRight;

        this.w_width = windowTopRight.x - windowBotLeft.x;
        this.w_height = windowTopRight.y - windowBotLeft.y;

        this.c_width = coordTopRight.x - coordBotLeft.x;
        this.c_height = coordTopRight.y - coordBotLeft.y;
    }

    to_coord(p: WindowPoint): CoordPoint {
        const frac_x: number = (p.x - this.windowBotLeft.x)/this.w_width;
        const frac_y: number = (p.y - this.windowBotLeft.y)/this.w_height;

        return new CoordPoint(this.coordBotLeft.x + frac_x*this.c_width, this.coordBotLeft.y + frac_y*this.c_height);
    }

    to_window(p: CoordPoint): WindowPoint {
        const frac_x: number = (p.x - this.coordBotLeft.x)/this.c_width;
        const frac_y: number = (p.y - this.coordBotLeft.y)/this.c_height;

        return new WindowPoint(this.windowBotLeft.x + frac_x*this.w_width, this.windowBotLeft.y + frac_y*this.w_height);
    }
};

export class PageToCoord {
    pageToWindow: PageToWindow;
    windowToCoord: WindowToCoord;

    constructor(windowToCoord: WindowToCoord, pageToWindow: PageToWindow){
        this.windowToCoord = windowToCoord;
        this.pageToWindow = pageToWindow;
    }

    to_coord(p_page: PagePoint): CoordPoint {
        const p_window: WindowPoint = this.pageToWindow.to_window(p_page);
        const p_coord: CoordPoint = this.windowToCoord.to_coord(p_window);
        return p_coord;
    }

    to_page(p_coord: CoordPoint): PagePoint{
        const p_window: WindowPoint = this.windowToCoord.to_window(p_coord);
        const p_page: PagePoint = this.pageToWindow.to_page(p_window);
        return p_page;
    }
}

// Define lines in Coord space and bring them to Window space
export class Grid extends Graphics {
    
    botLeft: Point;
    topRight: Point;
    delta: number;
    converter: PageToCoord;

    constructor(botLeft: Point, topRight: Point, delta: number, converter: any){
        super();
        this.botLeft = botLeft;
        this.topRight = topRight;
        this.delta = delta;
        this.converter = converter;

        let x1: number = botLeft.x;
        let x2: number = topRight.x;
        let y1: number = botLeft.y;
        let y2: number = topRight.y;

        let nx_start: number = Math.trunc(x1/delta);
        let nx_end: number = Math.trunc(x2/delta);
        let ny_start: number = Math.trunc(y1/delta);
        let ny_end: number = Math.trunc(y2/delta);

        let nx_start_close: boolean = Math.abs(Math.round(x1/delta) - x1/delta) < tol;
        let nx_end_close:   boolean = Math.abs(Math.round(x2/delta) - x2/delta) < tol;
        let ny_start_close: boolean = Math.abs(Math.round(y1/delta) - y1/delta) < tol;
        let ny_end_close:   boolean = Math.abs(Math.round(y2/delta) - y2/delta) < tol;

        for(let n: number = ny_start; n <= ny_end; n++){

            if(n == ny_start && ny_start_close){
                continue;
            }
            if(n == ny_end && ny_end_close){
                continue;
            }

            let y: number = n*this.delta;

            const p1 = this.converter.to_page(new CoordPoint(x1, y));
            const p2 = this.converter.to_page(new CoordPoint(x2, y));

            this.moveTo(Math.trunc(p1.x), Math.trunc(p1.y));
            this.lineTo(Math.trunc(p2.x), Math.trunc(p2.y));
            this.stroke({
                width: n==0 ? 2: 0.5,
                color: 0x888888
            });
        }


        for(let n: number = nx_start; n <= nx_end; n++){

            if(n == nx_start && nx_start_close){
                continue;
            }
            if(n == nx_end && nx_end_close){
                continue;
            }

            let x: number = n*this.delta;

            const p1 = this.converter.to_page(new CoordPoint(x, y1));
            const p2 = this.converter.to_page(new CoordPoint(x, y2));
            
            this.moveTo(p1.x, p1.y);
            this.lineTo(p2.x, p2.y);
            this.stroke({
                width: n==0 ? 2: 0.5,
                color: 0x888888
            });
        }
    }
};

function drawArrowHead(
    g: Graphics,
    tip: Point,
    from: Point,
    size = 8,
    angle = Math.PI / 6
) {
    const dx = tip.x - from.x;
    const dy = tip.y - from.y;
    const theta = Math.atan2(dy, dx);

    const a1 = theta + Math.PI - angle;
    const a2 = theta + Math.PI + angle;

    g.moveTo(tip.x, tip.y)
     .lineTo(
        tip.x + size * Math.cos(a1),
        tip.y + size * Math.sin(a1)
     )
     .moveTo(tip.x, tip.y)
     .lineTo(
        tip.x + size * Math.cos(a2),
        tip.y + size * Math.sin(a2)
     );
}

export class Arrow extends Graphics {

    direction: CoordPoint;
    converter: PageToCoord;

    constructor(direction: CoordPoint, converter: PageToCoord){
        // OrthogonalArrow always points to some ConstraintLine, so it needs
        // to know the two points that define it. That's p1 and p2. It also
        // needs to know the drawable region. That's what limits is for
        super();
        this.converter = converter
        
        this.direction = direction;
        const norm = Math.sqrt(direction.x*direction.x + direction.y*direction.y);
        if(norm < tol){
            this.visible = false;
            return;
        }
        this.direction.scale(1.0/norm);
        this.visible = true;
    }

    update(mousePosition: CoordPoint) {
        if(!this.visible){
            // console.log("Arrow not update!");
            return;
        }
        // console.log("Arrow update!");
        this.draw(mousePosition);
    };

    draw(mousePosition: CoordPoint){

        const end: CoordPoint = mousePosition.add(this.direction);
        const mousePage: PagePoint = this.converter.to_page(mousePosition);
        const pointPage: PagePoint = this.converter.to_page(end);

        this.clear();
        
        this.moveTo(mousePage.x, mousePage.y)
            .lineTo(pointPage.x, pointPage.y);

        drawArrowHead(this, pointPage, mousePage);

        this.stroke({
                width: 2.0, 
                color: 0xff0000
            });
    }
}

export class OrthogonalArrow extends Graphics {

    p1: CoordPoint;
    p2: CoordPoint;
    limits: CoordLimits;
    id: String;

    converter: PageToCoord;

    lab: Text;
    lscale: number;
    eq: LineEquation;

    constructor(eq: LineEquation, p1: CoordPoint, p2: CoordPoint, limits: CoordLimits, id: String, converter: PageToCoord){
        // OrthogonalArrow always points to some ConstraintLine, so it needs
        // to know the two points that define it. That's p1 and p2. It also
        // needs to know the drawable region. That's what limits is for
        super();

        this.eq = eq;
        this.p1 = p1;
        this.p2 = p2;

        this.limits = limits;
        this.id = id;

        this.converter = converter

        this.visible = false;
        this.lscale = Math.sqrt(eq.a*eq.a + eq.b*eq.b);

        // Text label
        this.lab = new Text({
            style: {
                fill: "#000000",
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            }
        });

        this.lab.visible = false;
    }

    update(mousePosition: CoordPoint) {
        if(!this.visible){
            return;
        }

        const p: CoordPoint = closestPoint(this.p1, this.p2, mousePosition);

        this.draw(mousePosition, p);
    };

    activate(){
        this.visible = true;
        this.lab.visible = true;
    }

    deactivate(){
        this.visible = false;
        this.lab.visible = false;
    }

    toggleActivate(){
        this.visible = !this.visible;
        this.lab.visible = !this.lab.visible;
    }

    draw(mousePosition: CoordPoint, pointOnLine: CoordPoint){


        const {xmin, xmax, ymin, ymax} = this.limits;

        let u: CoordPoint = pointOnLine.subtract(mousePosition);
        const uNorm = Math.sqrt(u.x*u.x + u.y*u.y);
        u = u.scale(1.0/uNorm);
        // console.log("u: ", uNorm, u)

        const p: CoordPoint = mousePosition;
        const A = new CoordPoint(xmin, ymax); // Top-left
        const B = new CoordPoint(xmax, ymax); // Top-right
        const C = new CoordPoint(xmax, ymin); // Bot-left
        const D = new CoordPoint(xmin, ymin); // Bot-right

        let tMin: number = 0;

        const ts = [intersectDistance(p, u, this.p1, this.p2), 
                    intersectDistance(p, u, A, B), 
                    intersectDistance(p, u, B, C), 
                    intersectDistance(p, u, C, D), 
                    intersectDistance(p, u, D, A)]

        const bestIndex = ts.reduce((minIdx, cur, i) => {
            // ignore negatives
            if (cur.t < 0) return minIdx;

            // if no valid min yet, use this one
            if (minIdx === -1 || ts[minIdx].t < 0) return i;

            return cur.t < ts[minIdx].t ? i : minIdx;
        }, -1); // -1 means “no valid element”

        // console.log("draw: ", ts);

        const mousePage: PagePoint = this.converter.to_page(mousePosition);
        const pointPage: PagePoint = this.converter.to_page(ts[bestIndex].p);

        this.clear();
        
        this.moveTo(mousePage.x, mousePage.y)
            .lineTo(pointPage.x, pointPage.y);

        if(bestIndex === 0){
            drawArrowHead(this, pointPage, mousePage);
        }

        this.stroke({
                width: 1.0, 
                color: 0x333333
            });

        const d: CoordPoint = mousePosition.subtract(pointOnLine);
        const sign = d.dot(new CoordPoint(this.eq.a, this.eq.b)) > 0 ? -1: 1;
        const s: number = Math.sqrt(d.x*d.x + d.y*d.y)*this.lscale*sign;

        this.lab.text = this.id + "=" + s.toFixed(1);
        this.lab.x = (mousePage.x + pointPage.x)*0.5;
        this.lab.y = (mousePage.y + pointPage.y)*0.5;

    }
}

export class ConstraintLine {

    visited: boolean = false;
    active: boolean = false;
    lit: boolean = false;

    hit: Graphics = new Graphics();
    visual: Graphics = new Graphics();
    labelText: Text = new Text();

    p1_page: PagePoint;
    p2_page: PagePoint;
    p1: CoordPoint;
    p2: CoordPoint;
    id: String;

    onClick: (() => void) | null = null;
    onMouseMove: ((e: FederatedPointerEvent) => void) | null = null;

    constructor(limits: CoordLimits, eq: LineEquation, converter: PageToCoord, id: String) {
        
        let points = line_to_points(eq.a, eq.b, eq.d, limits);

        this.p1_page = converter.to_page(points.p1);
        this.p2_page = converter.to_page(points.p2);
        this.p1 = points.p1;
        this.p2 = points.p2;

        this.id = id;
        
        this.labelText = new Text({
            text: id,
            style: {
                fill: "#000000",
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            }
        });

        this.labelText.visible = false;
        this.labelText.position.x = this.p1_page.x;
        this.labelText.position.y = this.p1_page.y;

        this.hit.eventMode = 'static';
        this.hit.cursor = 'pointer';
        
        this.hit.on('pointerdown', () => this.onClick?.());
        this.hit.on('pointermove', (e) => this.onMouseMove?.(e));
        this.hit.on('pointerover', () => this.onOver());
        this.hit.on('pointerout', () => this.onOut());

        this.drawHit();
        this.drawVisual();
    }

    onOver(){
        this.labelText.visible = true;

        if(this.active){
            return;
        }
        
        // console.log('Constraint pointerover');

        this.visited = true;
        this.lit = true;
        this.drawVisual();
    }
    
    onOut(){

        this.labelText.visible = false;
        if(this.active){
            return;
        }

        this.lit = false;
        this.drawVisual();
        // console.log('Constraint pointerout');
    }

    activate(){
        // console.log('Constraint ' + this.id + ' activated');
        this.active = true;
        this.visited = true;
        this.drawVisual();
    }

    deactivate(){
        // console.log('Constraint ' + this.id + ' deactivated');
        this.active = false;
        this.lit = false;
        this.visited = true;
        this.drawVisual();
    }

    toggleActivate(){
        if(this.active){
            this.deactivate();
        } else {
            this.activate();
        }
    }

    // pulse(power: number){
        
    //     if(this.visited){
    //         return;
    //     }

    //     let start = {r: 0, g: 0, b: 0};
    //     let end = {r: 255, g: 120, b: 30};

    //     let start_width = 3.0;
    //     let end_width = 5.0;
    //     let width = end_width*power + start_width*(1-power);

    //     let current = {r: end.r*power + start.r*(1-power), g: end.g*power + start.g*(1-power), b: end.b*power + start.b*(1-power)};


    //     const p1: Point = this.converter.to_page(this.p1);
    //     const p2: Point = this.converter.to_page(this.p2);

    //     this.clear();
    //     this.moveTo(p1.x, p1.y)
    //         .lineTo(p2.x, p2.y)
    //         .stroke({
    //             width: width,
    //             color: current,
    //         });
    // }

    private drawHit() {
        this.hit.clear();
        this.hit
            .moveTo(this.p1_page.x, this.p1_page.y)
            .lineTo(this.p2_page.x, this.p2_page.y)
            .stroke({ width: 15, alpha: 0.001 });
    }

    private drawVisual() {

        const highlighted = this.lit || this.active;

        this.visual.clear();

        

        this.visual
            .moveTo(this.p1_page.x, this.p1_page.y)
            .lineTo(this.p2_page.x, this.p2_page.y)
            .stroke({
                width: highlighted ? 5 : 3,
                color: highlighted ? highlightedColor : 0x000000
            });
    }

}

// Manages the state of all the lines when one of them is updated
export class LineManager {
    lines: Map<number, ConstraintLine> = new Map<number, ConstraintLine>();
    linesStatus: boolean[] = [];
    labelToId: Map<String, number> = new Map<String, number>();
    idToLabel: Map<number, String> = new Map<number, String>();

    items: Two = new Two();
    numLines: number = 0;
    tableau: SimplexTableau;
    origTableau: SimplexTableau;

    onUpdate: (() => void) | null = null;
    onWarning: (() => void) | null = null;

    constructor(tableau: SimplexTableau, labelDictionary: Map<String, number>){

        // this.deque = new Deque<number>(2);
        
        // Set dictionary and reverse dictionary
        this.labelToId = labelDictionary;
        for(const [label, id] of this.labelToId){
            this.idToLabel.set(id, label);
        }

        this.tableau = tableau;
        this.origTableau = tableau.clone();

        this.numLines = tableau.num_constraints + tableau.dimension;
        for(let i=0; i<this.numLines; i++){
            this.linesStatus.push(false);
        }
        
        this.linesStatus[0] = true;
        this.linesStatus[1] = true;
        // console.log("LInesStatus: " , this.linesStatus);
        
        this.items.count = 2;
        this.items.oldest = 0;
        this.items.newest = 1;
    };

    activeLines(): number[] {
        let active: number[] = [];
        for(let n=0; n<this.numLines; n++){
            if(this.linesStatus[n]){
                active.push(n);
            }
        }
        // console.log("active: ", active);
        return active;
    }

    inactiveLines(): number[] {

        let inactive: number[] = [];
        for(let n=0; n<this.numLines; n++){
            if(!this.linesStatus[n]){
                inactive.push(n);
            }
        }
        // console.log("inactive: ", inactive);
        return inactive;
    }

    update(clickedLineLabel: String, wasActive: boolean){
        let pivotPossible = true;
        const id: number = this.labelToId.get(clickedLineLabel)!;
        // const dequeCopy = structuredClone(this.deque);
        let items = this.items;
        // console.log("onUpdate: labelToId ", this.labelToId);
        // console.log("onUpdate: clickedLineLabel ", clickedLineLabel);
        // console.log("onUpdate: numLines ", this.numLines);
        // console.log("onUpdate: items ", items);
        // console.log("onUpdate: id ", id);
        
        // If the line was not previously active, try to add it to the deque
        if(!wasActive){
            // console.log("onUpdate: line was inactive");

            // If two lines are already active, one of them needs to be evicted
            // The oldest one should be evicted, unless it's not possible
            if(items.count === 2){
                // console.log("onUpdate: there are currently two lines");

                // Try to evict the oldest
                if(this.tableau.canPivot(id, items.oldest!)){
                    // console.log("onUpdate: pivot the oldest");
                    this.tableau.pivotVar(id, items.oldest!);

                    this.linesStatus[id] = true;
                    this.linesStatus[items.oldest!] = false;

                    items.oldest = items.newest!;
                    items.newest = id;

                // Try to evict the newest
                } else if(this.tableau.canPivot(id, items.newest!)){
                    // console.log("onUpdate: pivot the newest");
                    this.tableau.pivotVar(id, items.newest!);

                    this.linesStatus[id] = true;
                    this.linesStatus[items.newest!] = false;

                    items.newest = id;
                
                // Change nothing
                } else {
                    // console.log("onUpdate: no pivot");
                    pivotPossible = false;
                }
            }

            // If there was one single active line before, now there will be two
            // We need to pivot into these two simultaneously, starting from
            // a blank slate
            else if(items.count === 1){
                // console.log("onUpdate: there is currently one line");

                this.tableau = this.origTableau.clone();
                // console.log("Current tableau");
                this.tableau.print();
                const item = (items.newest ?? items.oldest)!;
                // console.log("onUpdate: item", item);

                let success1 = true;
                let success2 = true;

                // Pivot 0 to id and 1 to item
                if(this.tableau.canPivot(id, 0)){
                    this.tableau.pivotVar(id, 0);
                    if(this.tableau.canPivot(item, 1)){
                        this.tableau.pivotVar(item, 1);

                    } else {
                        success1 = false;
                        this.tableau = this.origTableau.clone();
                    }
                } else {
                    success1 = false;
                }
                // console.log("onUpdate: first success? ", success1);

                if(!success1 && this.tableau.canPivot(id, 1)){
                    this.tableau.pivotVar(id, 1);
                    if(this.tableau.canPivot(item, 0)){
                        this.tableau.pivotVar(item, 0);
                        

                    // Could not pivot 1 and 0 into id and item
                    } else {
                        success2 = false;
                        this.tableau = this.origTableau.clone();
                    }
                } else {
                    success2 = false;
                }
                // console.log("onUpdate: second success? ", success2);

                if(!success1 && !success2){
                    pivotPossible = false;
                    this.onWarning?.();

                } else {
                    this.linesStatus[id] = true;
                    items.oldest = item;
                    items.newest = id;
                    items.count++;
                }

            // There are no active lines yet, but there will be one now
            } else {
                // console.log("onUpdate: there is currently no line");
                this.linesStatus[id] = true;
                items.newest = id;
                items.count++;
                this.onUpdate?.();
            }

            
        // If the line was active before, remove it from the deque
        } else {
            // console.log("onUpdate: line was active");
            this.items.remove(id);
            this.linesStatus[id] = false;
            this.onUpdate?.();
        }

        if(pivotPossible){
            // console.log("onUpdate: pivot was possible");
            this.onUpdate?.();
        }
        this.tableau.print();
    }
}

export class TableauToText2 {

  private container: HTMLElement;
  private dictionaryContainer: HTMLElement;
  private costContainer: HTMLElement;
  private descriptionText: HTMLElement;
  private warningText: HTMLElement;
  private titleText: HTMLElement;

  private idToLabel: Map<number,String>;
  private numSlacks: number;

  constructor(
    container: HTMLElement,
    numSlacks: number,
    idToLabel: Map<number, String>
  ) {
    this.container = container;
    this.numSlacks = numSlacks;
    this.idToLabel = idToLabel;

    // Build structure
    this.container.classList.add("tableau");

    this.titleText = document.createElement("h2");
    this.titleText.textContent = "Coordinate System";

    this.descriptionText = document.createElement("div");
    this.descriptionText.className = "description";

    this.dictionaryContainer = document.createElement("div");
    this.dictionaryContainer.className = "dictionary";

    this.costContainer = document.createElement("div");
    this.costContainer.className = "cost";

    this.warningText = document.createElement("div");
    this.warningText.className = "warning";

    this.container.append(
      this.titleText,
      this.descriptionText,
      this.dictionaryContainer,
      this.costContainer,
      this.warningText
    );
  }

  setWarning() {
    this.warningText.textContent = "Cannot use parallel lines as basis!";
  }

  resetWarning() {
    this.warningText.textContent = "";
  }

  update(tableau: SimplexTableau) {
    const A = tableau.matrix;
    const basis = tableau.basis;
    const dictionary = tableau.dictionary;
    const bCol = tableau.rhsCol;
    const nSlacks = tableau.num_constraints;

    // Clear dictionary
    this.dictionaryContainer.innerHTML = "";

    for (let i = 0; i < nSlacks; i++) {
      const dicVar = dictionary[i];
      const dicLab = this.idToLabel.get(dicVar);

      const pivot = A[i][dicVar];
      const psign = pivot > 0 ? 1 : -1;
      const rhs = (psign * A[i][bCol]).toFixed(1);

      const row = document.createElement("div");
      row.className = "Trow";

      row.append(`${dicLab} = ${rhs}`);
    
      for (const baseVar of basis) {
        const baseLab = this.idToLabel.get(baseVar);
        const c = -A[i][baseVar] * psign;
        if (Math.abs(c) < tol) continue;

        const sign = c > 0 ? "+" : "-";
        const mag = Math.abs(c);
        const coeff = Math.abs(mag - 1) < tol ? "" : mag.toFixed(1);

        row.append(` ${sign} ${coeff}`);

        const span = document.createElement("span");
        span.className = "highlight";
        span.textContent = baseLab!;
        row.append(span);
      }

      this.dictionaryContainer.appendChild(row);
    }

    this.updateCostFunction(tableau);

    // Update description
    const basisVars = basis.map(v => this.idToLabel.get(v));
    const dicVars = dictionary.map(v => this.idToLabel.get(v));

    this.descriptionText.innerHTML =
      `Basis variables: ${basisVars.join(", ")}<br>` +
      `Dictionary variables: ${dicVars.join(", ")}`;
  }

  private updateCostFunction(tableau: SimplexTableau) {
    const A = tableau.matrix;
    const basis = tableau.basis;
    const bCol = tableau.rhsCol;
    const nSlacks = tableau.num_constraints;

    this.costContainer.innerHTML = "";

    let sum = 0;
    for (const b of basis) {
      sum += Math.abs(A[nSlacks][b]);
    }
    if (sum < tol) return;

    const cost = -(A[nSlacks][bCol]).toFixed(1);

    const row = document.createElement("div");
    row.className = "Trow";

    row.append(`Cost = ${cost}`);

    for (const baseVar of basis) {
      const baseLab = this.idToLabel.get(baseVar);
      const c = A[nSlacks][baseVar];
      if (Math.abs(c) < tol) continue;

      const sign = c > 0 ? "+" : "-";
      const mag = Math.abs(c);
      const coeff = Math.abs(mag - 1) < tol ? "" : mag.toFixed(1);

      row.append(` ${sign} ${coeff}`);

      const span = document.createElement("span");
      span.className = "highlight";
      span.textContent = baseLab!;
      row.append(span);
    }

    this.costContainer.appendChild(row);
  }

  setVisible(visible: boolean) {
    console.log("is visible?:", visible);
    this.container.style.display = visible ? "" : "none";
  }

}



export class TableauToText {
    dictionaryTexts: Text[] = [];
    costText: Text;
    descriptionText: Text;
    warningText: Text;
    titleText: Text;
    labelToId: Map<String, number> = new Map<String, number>();
    idToLabel: Map<number, String> = new Map<number, String>();
    converter: PageToWindow;
    numSlacks: number;
    
    constructor(numSlacks: number, labelToId: Map<String, number>, idToLabel: Map<number, String>, converter: PageToWindow){
        this.labelToId = labelToId;
        this.idToLabel = idToLabel;
        this.converter = converter;
        this.numSlacks = numSlacks;
        
        for(let i = 0; i < numSlacks; i++){
            const t = new Text({
                text: "",
                style: {
                    fill: "#000000",
                    fontSize: 16,
                    fontFamily: "Montserrat Medium"
                }
            });

            t.visible = true;
            this.dictionaryTexts.push(t);   
        }


        this.costText = new Text({
            text: "",
            style: {
                fill: "#000000",
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            }
        });
        this.costText.visible = true;


        this.descriptionText = new Text({
            text: "",
            style: {
                fill: "#000000",
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            }
        });
        this.descriptionText.visible = true;

        this.warningText = new Text({
            text: "Warning  ",
            style: {
                fill: highlightedColor,
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            }
        });
        this.warningText.visible = true;


        this.titleText = new Text({
            text: "Coordinate System ",
            style: {
                fill: "#000000",
                fontSize: 25,
                fontFamily: "Montserrat Medium"
            }
        });
        this.titleText.visible = true;
        
    }

    setWarning(){
        this.warningText.text = "Cannot use parallel lines as basis!  ";
    }
    resetWarning(){
        this.warningText.text = "";
    }

    pos(windowPoint: WindowPoint){
        const pagePoint: PagePoint = this.converter.to_page(windowPoint);
        const x = pagePoint.x;
        const y = pagePoint.y - 200; // Shift the title to the top

        this.titleText.position = new PagePoint(x, y);
        this.descriptionText.position = new PagePoint(x, y + 50);

        for(let i = 0; i < this.numSlacks; i++){
            const t = this.dictionaryTexts[i];
            t.position = new PagePoint(x, y + 100 + i*22);
        }

        this.costText.position = new PagePoint(x, y+120 + this.numSlacks*22);

        this.warningText.position = new PagePoint(x, y+150 + this.numSlacks*22);

    }

    updateCostFunction(tableau: SimplexTableau){
        const bCol = tableau.rhsCol;
        const A = tableau.matrix;
        const basis = tableau.basis;
        const nSlacks = tableau.num_constraints;

        // Check if the cost function has coefficients at all
        let sum: number = 0;
        for(const b of basis){
            sum += Math.abs(A[nSlacks][b]);
        }
        if(sum < tol){
            return;
        }

        const rowContainer = this.costText; 
        rowContainer.removeChildren();

        const cost = -(A[nSlacks][bCol]).toFixed(1);

        const baseText = new Text(`Cost = ${cost}`, {
            fill: 0x000000,  // color for base part
            fontSize: 16,
            fontFamily: "Montserrat Medium"
        });
        baseText.x = 0;
        rowContainer.addChild(baseText);

        let xOffset = baseText.width;

        for (let i=0; i<basis.length; i++) {
            const baseVar = basis[i];
            const baseLab = this.idToLabel.get(baseVar);
            const c = A[nSlacks][baseVar];

            if (Math.abs(c) < tol) continue;

            const sign = c > 0 ? "+" : "-";
            const mag = Math.abs(c);
            const coeff = Math.abs(mag - 1) < tol ? "" : mag.toFixed(1);

            const coefText = new Text(` ${sign} ${coeff}`, {
                fill: 0x000000, // different color for basis variable
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            });

            coefText.x = xOffset;
            rowContainer.addChild(coefText);
            xOffset += coefText.width;

            const termText = new Text(`${baseLab}`, {
                fill: highlightedColor, // different color for basis variable
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            });

            termText.x = xOffset;
            rowContainer.addChild(termText);

            xOffset += termText.width;
        }
        
    }

    update(tableau: SimplexTableau){
        const bCol = tableau.rhsCol;
        const A = tableau.matrix;
        const basis = tableau.basis;
        const dictionary = tableau.dictionary;

        const nSlacks = tableau.num_constraints;

        for (let i = 0; i < nSlacks; i++) {
            const dicVar = dictionary[i];
            const dicLab = this.idToLabel.get(dicVar);

            const pivot: number = A[i][dicVar]
            const psign: number = pivot > 0 ? 1: -1;
            const rhs = (psign*A[i][bCol]).toFixed(1);

            // Clear previous children
            const rowContainer = this.dictionaryTexts[i]; 
            rowContainer.removeChildren();

            // Base text
            const baseText = new Text(`${dicLab} = ${rhs}`, {
                fill: 0x000000,  // color for base part
                fontSize: 16,
                fontFamily: "Montserrat Medium"
            });
            baseText.x = 0;
            rowContainer.addChild(baseText);

            let xOffset = baseText.width;

            for (const baseVar of basis) {
                const baseLab = this.idToLabel.get(baseVar);
                const c = -A[i][baseVar]*psign;
                if (Math.abs(c) < tol) continue;

                const sign = c > 0 ? "+" : "-";
                const mag = Math.abs(c);
                const coeff = Math.abs(mag - 1) < tol ? "" : mag.toFixed(1);

                const coefText = new Text(` ${sign} ${coeff}`, {
                    fill: 0x000000, // different color for basis variable
                    fontSize: 16,
                    fontFamily: "Montserrat Medium"
                });

                coefText.x = xOffset;
                rowContainer.addChild(coefText);
                xOffset += coefText.width;

                const termText = new Text(`${baseLab}`, {
                    fill: highlightedColor, // different color for basis variable
                    fontSize: 16,
                    fontFamily: "Montserrat Medium"
                });

                termText.x = xOffset;
                rowContainer.addChild(termText);

                xOffset += termText.width;
            }
        }

        this.updateCostFunction(tableau);

        let terms: String[] = [];
        for(const baseVar of basis){
            terms.push(this.idToLabel.get(baseVar)!);
        }
        this.descriptionText.text = "Basis variables: " + terms.join(", ") + "  \n";

        terms = [];
        for(const dicVar of dictionary){
            terms.push(this.idToLabel.get(dicVar)!);
        }
        this.descriptionText.text += "Dictionary variables: " + terms.join(", ") + "  ";
    }
}

export function ConstraintToEq(constraint: Constraint){
    const a: number = constraint.row[0];
    const b: number = constraint.row[1];
    const lower: number | undefined = constraint.lower;
    const upper: number | undefined = constraint.upper;

    let d: number;
    let eq: LineEquation;
    if(lower !== undefined){
        eq = {a: -a, b: -b, d: lower};
    } else if(upper !== undefined){
        eq = {a, b, d: -upper};
    } else {
        throw "either lower or upper needs to be defined";
    }

    return eq;
}

export class LineGenerator {

    coordLimits: CoordLimits;
    pageToCoord: PageToCoord;

    xExists: boolean = false;
    yExists: boolean = false;
    linesFinalized: boolean = false;

    lines: ConstraintLine[] = [];
    arrows: OrthogonalArrow[] = [];
    constraints: Constraint[] = [];

    labelDictionary: Map<String, number> = new Map<String, number>();

    constructor(coordLimits: CoordLimits, pageToCoord: PageToCoord){
        this.coordLimits = coordLimits;
        this.pageToCoord = pageToCoord;
    }

    addLine(constraint: Constraint){

        if(this.linesFinalized){
            throw "Additional lines should not be defined after the tableau is built";
        }

        this.labelDictionary.set(constraint.label, this.constraints.length);

        // console.log("constraint ", constraint);
        const eq = ConstraintToEq(constraint);
        const label: String = constraint.label;
        
        // There must be only one 'x' label and one 'y' label, and the 
        // corresponding line equations must be x=0 and y=0, respectively
        if(label === "x"){
            if(this.xExists){
                throw "x already exists";
            }
            if(Math.abs(eq.a + 1) > tol || Math.abs(eq.b) > tol || Math.abs(eq.d) > tol){
                throw "Line equation for x label does not match";
            }
            this.xExists = true;

        } else if(label === "y"){
            if(this.yExists){
                throw "y already exists";
            }
            if(Math.abs(eq.b + 1) > tol || Math.abs(eq.a) > tol || Math.abs(eq.d) > tol){
                throw "Line equation for y label does not match";
            }
            this.yExists = true;
        }

        const line = new ConstraintLine(this.coordLimits, eq, this.pageToCoord, label);
        const arrow = new OrthogonalArrow(eq, line.p1, line.p2, this.coordLimits, label, this.pageToCoord);

        this.lines.push(line);
        this.arrows.push(arrow);
        this.constraints.push(constraint);

        return {line: line, arrow: arrow};
    }

    getLines(): ConstraintLine[] {
        this.linesFinalized = true;
        return this.lines;
    }

    getArrows(): OrthogonalArrow[] {
        this.linesFinalized = true;
        return this.arrows;
    }

    getManager(costFunction: number[] | undefined): LineManager{
        if(!this.xExists || !this.yExists){
            throw "x and y labels must be defined";
        }

        const nonBasisConstraints: Constraint[] = [];
        for(const c of this.constraints){
            // console.log("getManager: ", c.label);
            if(c.label === "x" || c.label === "y"){
                continue;
            }
            nonBasisConstraints.push(c);
        }

        // console.log("getManager: ", nonBasisConstraints);
        this.linesFinalized = true;

        if(costFunction === undefined){
            costFunction = [0, 0];
        }
        
        const tableau = build_tableau(nonBasisConstraints, costFunction, false);
        // console.log("getManager: ", tableau);
        
        return new LineManager(tableau, this.labelDictionary);
    }
}

export function polygonFromConstraints(constraints: Constraint[], limits: CoordLimits){
    // The set of constraints defines a feasible region, that I want to display
    // on the screen. It may happen that the region is either unbounded or too
    // large to fit on the screen, in which case it needs to be truncated according
    // to 'limits'

    const nonBasisConstraints: Constraint[] = [];
    for(const c of constraints){
        if(c.label === "x" || c.label === "y"){
            continue;
        }
        nonBasisConstraints.push(c);
    }

    nonBasisConstraints.push(new Constraint({lower: undefined, a: 0, b: 1, upper: limits.ymax, label: "ytop"}));
    nonBasisConstraints.push(new Constraint({lower: undefined, a: 1, b: 0, upper: limits.xmax, label: "xtop"}));

    const costFunction: number[] = []
    costFunction.push(0);
    costFunction.push(0);

    let tableau = build_tableau(nonBasisConstraints, costFunction, true);

    pivot_into_feasible(tableau);
    simplex(tableau);
    const tableau2 = tableau.trim_tableau();

    const visited: boolean[] = [];
    for(let i=0; i<tableau.rhsCol; i++){
        visited.push(false);
    }

    const vertices: CoordPoint[] = [];

    let old: number = tableau2.basis[0];
    let recent: number = tableau2.basis[1];

    const c = tableau2.extract_coordinates();
    vertices.push(new CoordPoint(c[0], c[1]));
    visited[old] = true;
    
    for(let i=0; i<99; i++){
        // console.log("basis:", tableau2.basis);
        // console.log("dict:", tableau2.dictionary);
        // console.log("old, rec: ", old, recent);
        let temp = tableau2.simplex_pivot(old)!;
        old = recent;
        recent = temp;

        const c = tableau2.extract_coordinates();
        vertices.push(new CoordPoint(c[0], c[1]));
        // console.log(c);
        if(visited[old]){
            break;
        }
        visited[old] = true;
    }
    // console.log(vertices);
    return vertices;
}

export class Polygon extends Graphics {
    private verticesPage: number[];
    private normalColor: ColorSource = 0xa2cffc;
    private hoverColor: ColorSource = 0x3399ff;

    onOver: (() => void) | null = null;
    onOverOut: (() => void) | null = null;
    onMove: ((e: FederatedPointerEvent) => void) | null = null;

    constructor(vertices: CoordPoint[], converter: PageToCoord) {
        super();

        this.verticesPage = vertices.flatMap(p => {
            const pagePoint: PagePoint = converter.to_page(p);
            return [pagePoint.x, pagePoint.y];
        });

        this.eventMode = 'static';
        this.cursor = 'pointer';

        this.draw(this.normalColor);
        this.on('pointerover', () => this.highlight());
        this.on('pointerout', () => this.dehighlight());
        this.on('pointermove', (e) => this.onMove?.(e));
    }

    private draw(color: ColorSource) {
        this.clear();
        this.beginFill(color, 0.2);
        this.drawPolygon(this.verticesPage);
        this.endFill();
    }

    highlight() {
        this.draw(this.hoverColor);
    }

    dehighlight() {
        this.draw(this.normalColor);
    }
}

export class MatrixView2 {

  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  draw(matrix: number[][], options: {
    fontSize?: number;
    fontFamily?: string;
    color?: string;
  } = {}) {
    const {
      fontSize = 20,
      fontFamily = "Courier New",
      color = "#000000"
    } = options;

    // Clear previous content
    this.container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "matrix-wrapper";

    const table = document.createElement("table");
    table.className = "matrix-table";
    table.style.fontSize = `${fontSize}px`;
    table.style.fontFamily = fontFamily;
    table.style.color = color;

    // Ignore last row like original code
    const rows = matrix.length - 1;

    for (let i = 0; i < rows; i++) {
      const tr = document.createElement("tr");

      for (let j = 0; j < matrix[i].length; j++) {
        const td = document.createElement("td");
        td.textContent = String(matrix[i][j]);
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }

    wrapper.appendChild(table);
    this.container.appendChild(wrapper);
  }
}


