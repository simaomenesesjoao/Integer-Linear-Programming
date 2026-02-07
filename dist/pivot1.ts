import { PivotSnippet } from "../js_widgets/PivotSnippet.ts";
import { Constraint } from "../js_widgets/utils/simplex_cpp.ts";

export async function initRegion() {
    const constraints: Constraint[] = [];
    constraints.push(new Constraint({lower: 0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
    constraints.push(new Constraint({lower: undefined, a:  0.0, b: 1.0, upper: 6.0, label: "s₁"}));
    constraints.push(new Constraint({lower: undefined, a: -1.0, b: 1.0, upper: 4.0, label: "s₂"}));
    constraints.push(new Constraint({lower: undefined, a:  2.0, b: 1.0, upper: 15.0, label: "s₃"}));

    const snippet = new PivotSnippet({
        container: document.getElementById("pivot1")!,
        width: 800,
        height: 330,
        app_width: 300,
        constraints: constraints,
        costFunction: undefined,
        showMatrix: false,
        topRightCoord: {x: 8.0, y: 8.0},
        botLeftCoord: {x: -1.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

initRegion();