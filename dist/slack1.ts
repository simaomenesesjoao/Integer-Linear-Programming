import { SlackSnippet } from "../js_widgets/SlackSnippet.ts";
import { Constraint } from "../js_widgets/utils/simplex_cpp.ts";

export async function initRegion() {
    const constraints = [];
    constraints.push(new Constraint({lower: undefined, a:  2.0, b: 3.0, upper: 15.0, label: "s"}));

    const snippet = new SlackSnippet({
        container: document.getElementById("slack1")!,
        width: 800,
        height: 330,
        app_width: 300,
        constraints,
        include_polygon: false, 
        interactive_lines: [0],
        active_lines: [0],
        topRightCoord: {x: 8.0, y: 8.0},
        botLeftCoord: {x: -2.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

initRegion();