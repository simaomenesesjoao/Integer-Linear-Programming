import { SlackSnippet } from "../js_widgets/SlackSnippet.ts";
import { Constraint } from "../js_widgets/utils/simplex_cpp.ts";

export async function initRegion() {
    const constraints = [];
    constraints.push(new Constraint({lower: 0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
    constraints.push(new Constraint({lower: undefined, a:  1.0, b: 0.0, upper: 5.0, label: "xx"}));
    constraints.push(new Constraint({lower: undefined, a:  0.0, b: 1.0, upper: 5.0, label: "yy"}));
    constraints.push(new Constraint({lower: undefined, a:  1.0, b: 1.0, upper: 7.5, label: "s"}));

    const snippet = new SlackSnippet({
        container: document.getElementById("region1")!,
        width: 800,
        height: 330,
        app_width: 300,
        constraints,
        include_polygon: true, 
        interactive_lines: [],
        active_lines: [],
        topRightCoord: {x: 8.0, y: 8.0},
        botLeftCoord: {x: -2.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

initRegion();