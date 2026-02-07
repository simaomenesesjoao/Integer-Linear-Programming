import { PivotSnippet } from "../js_widgets/PivotSnippet.ts";
import { Constraint } from "../js_widgets/utils/simplex_cpp.ts";

export async function initRegion() {
    const constraints: Constraint[] = [];
    constraints.push(new Constraint({lower: 0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
    constraints.push(new Constraint({lower: 3.0, a: 1.0, b: 1.0, upper: undefined, label: "s₁"}));
    constraints.push(new Constraint({lower: undefined, a: 1.0, b: 1.0, upper: 9.0, label: "s₂"}));

    const snippet = new PivotSnippet({
        container: document.getElementById("pivot2")!,
        width: 800,
        height: 330,
        app_width: 300,
        constraints: constraints, 
        costFunction: [1.0, 2.0],
        showMatrix: true,
        topRightCoord: {x: 10.0, y: 10.0},
        botLeftCoord: {x: -1.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

initRegion();