import { SlackSnippet } from "../js_widgets/SlackSnippet.ts";
import { Constraint } from "../js_widgets/utils/simplex_cpp.ts";

export async function initRegion() {
    // Four constraints, unbounded region
    const constraints = [];
    constraints.push(new Constraint({lower: 1.0, a:  0.0, b: 1.0, upper: undefined, label: "s1"}));
    constraints.push(new Constraint({lower: 1.0, a:  1.0, b: 0.0, upper: undefined, label: "s2"}));
    constraints.push(new Constraint({lower: undefined, a: -1.0, b: 1.0, upper: 4.0, label: "s3"}));
    constraints.push(new Constraint({lower: 3.0, a:  1.0, b: 1.0, upper: undefined, label: "s4"}));

    const snippet = new SlackSnippet({
        container: document.getElementById("slack4")!,
        width: 800,
        height: 330,
        app_width: 300,
        constraints,
        include_polygon: true, 
        interactive_lines: [0,1,2,3],
        active_lines: [0,3],
        topRightCoord: {x: 6.0, y: 6.0},
        botLeftCoord: {x: -1.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

initRegion();