import { init3D, Constraint, PivotSnippet, SlackSnippet} from '@simao/js-widgets'; 

export async function initPivot1(id: string, id2: string) {
    const constraints: Constraint[] = [];
    constraints.push(new Constraint({lower: 0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
    constraints.push(new Constraint({lower: undefined, a:  0.0, b: 1.0, upper: 6.0, label: "s₁"}));
    constraints.push(new Constraint({lower: undefined, a: -1.0, b: 1.0, upper: 4.0, label: "s₂"}));
    constraints.push(new Constraint({lower: undefined, a:  2.0, b: 1.0, upper: 15.0, label: "s₃"}));

    const snippet = new PivotSnippet({
        container: document.getElementById(id)!,
        width: 330,
        height: 330,
        app_width: 300,
        constraints: constraints,
        costFunction: undefined,
        showMatrix: null,
        showCoords: document.getElementById(id2),
        topRightCoord: {x: 8.0, y: 8.0},
        botLeftCoord: {x: -1.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

export async function initPivot2(id: string, id2: string, id3: string) {
    const constraints: Constraint[] = [];
    constraints.push(new Constraint({lower: 0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
    constraints.push(new Constraint({lower: 3.0, a: 1.0, b: 1.0, upper: undefined, label: "s₁"}));
    constraints.push(new Constraint({lower: undefined, a: 1.0, b: 1.0, upper: 9.0, label: "s₂"}));

    const snippet = new PivotSnippet({
        container: document.getElementById(id)!,
        width: 330,
        height: 330,
        app_width: 300,
        constraints: constraints, 
        costFunction: [1.0, 2.0],
        showMatrix: document.getElementById(id2),
        showCoords: document.getElementById(id3),
        topRightCoord: {x: 10.0, y: 10.0},
        botLeftCoord: {x: -1.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

// export async function initPivot3(id: string) {
//     const constraints: Constraint[] = [];
//     constraints.push(new Constraint({lower: 0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
//     constraints.push(new Constraint({lower: 0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
//     constraints.push(new Constraint({lower: 3.0, a: 1.0, b: 1.0, upper: undefined, label: "s₁"}));
//     constraints.push(new Constraint({lower: undefined, a: 1.0, b: 1.0, upper: 9.0, label: "s₂"}));

//     const snippet = new PivotSnippet({
//         container: document.getElementById(id)!,
//         width: 300,
//         height: 300,
//         app_width: 300,
//         constraints: constraints, 
//         costFunction: [1.0, 2.0],
//         showMatrix: null,
//         showCoords: null,
//         topRightCoord: {x: 10.0, y: 10.0},
//         botLeftCoord: {x: -1.0, y: -1.0}
//     });

//     await snippet.init();
//     return { constraints, snippet };
// }

export async function initRegion1(id: string) {
    const constraints = [];
    constraints.push(new Constraint({lower: 0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
    constraints.push(new Constraint({lower: undefined, a:  1.0, b: 0.0, upper: 5.0, label: "xx"}));
    constraints.push(new Constraint({lower: undefined, a:  0.0, b: 1.0, upper: 5.0, label: "yy"}));
    constraints.push(new Constraint({lower: undefined, a:  1.0, b: 1.0, upper: 7.5, label: "s"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
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

export async function initRegion2(id: string) {
    const constraints = [];
    constraints.push(new Constraint({lower: 0, a:  -1.0, b: 0.0, upper: undefined, label: "1"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: -1.0, upper: undefined, label: "2"}));
    constraints.push(new Constraint({lower: undefined, a:  -1.0, b: 1.0, upper: 3.0, label: "3"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
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

export async function initRegion3(id: string) {
    const constraints = [];
    constraints.push(new Constraint({lower: 0, a:  -1.0, b: 0.0, upper: undefined, label: "1"}));
    constraints.push(new Constraint({lower: 0, a:  0.0, b: -1.0, upper: undefined, label: "2"}));
    constraints.push(new Constraint({lower: undefined, a:  1.0, b: 1.0, upper: 9.0, label: "3"}));
    constraints.push(new Constraint({lower: 3.0, a:  1.0, b: 1.0, upper: undefined, label: "3"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
        height: 330,
        app_width: 300,
        constraints,
        include_polygon: true, 
        interactive_lines: [],
        active_lines: [],
        topRightCoord: {x: 10.0, y: 10.0},
        botLeftCoord: {x: -1.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

export async function initSlack1(id: string) {
    const constraints = [];
    constraints.push(new Constraint({lower: undefined, a:  2.0, b: 3.0, upper: 15.0, label: "s"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
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

export async function initSlack2(id: string) {
    const constraints = [];
    constraints.push(new Constraint({lower: undefined, a:  2.0, b: 1.0, upper: 11.0, label: "s₁"}));
    constraints.push(new Constraint({lower: undefined, a:  1.0, b: -3.0, upper: 2.0, label: "s₂"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
        height: 330,
        app_width: 300,
        constraints,
        include_polygon: false, 
        interactive_lines: [0,1],
        active_lines: [0,1],
        topRightCoord: {x: 8.0, y: 8.0},
        botLeftCoord: {x: -2.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

export async function initSlack3(id: string) {
    // Four constraints, unbounded region
    const constraints = [];
    constraints.push(new Constraint({lower: 1.0, a:  0.0, b: 1.0, upper: undefined, label: "s1"}));
    constraints.push(new Constraint({lower: 1.0, a:  1.0, b: 0.0, upper: undefined, label: "s2"}));
    constraints.push(new Constraint({lower: undefined, a: -1.0, b: 1.0, upper: 4.0, label: "s3"}));
    constraints.push(new Constraint({lower: 3.0, a:  1.0, b: 1.0, upper: undefined, label: "s4"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
        height: 330,
        app_width: 300,
        constraints,
        include_polygon: true, 
        interactive_lines: [],
        active_lines: [],
        topRightCoord: {x: 8.0, y: 8.0},
        botLeftCoord: {x: -2.0, y: -1.0},
    });

    await snippet.init();
    return { constraints, snippet };
}

export async function initSlack4(id: string) {
    // Four constraints, unbounded region
    const constraints = [];
    constraints.push(new Constraint({lower: 1.0, a:  0.0, b: 1.0, upper: undefined, label: "s1"}));
    constraints.push(new Constraint({lower: 1.0, a:  1.0, b: 0.0, upper: undefined, label: "s2"}));
    constraints.push(new Constraint({lower: undefined, a: -1.0, b: 1.0, upper: 4.0, label: "s3"}));
    constraints.push(new Constraint({lower: 3.0, a:  1.0, b: 1.0, upper: undefined, label: "s4"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
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

export async function initSlack5(id: string) {
    // Four constraints, unbounded region
    const constraints = [];
    constraints.push(new Constraint({lower: 0.0, a:  0.0, b: 1.0, upper: undefined, label: "y"}));
    constraints.push(new Constraint({lower: 0.0, a:  1.0, b: 0.0, upper: undefined, label: "x"}));
    constraints.push(new Constraint({lower: 1.0, a:  0.0, b: 1.0, upper: undefined, label: "s1"}));
    constraints.push(new Constraint({lower: 1.0, a:  1.0, b: 0.0, upper: undefined, label: "s2"}));
    constraints.push(new Constraint({lower: undefined, a: -1.0, b: 1.0, upper: 4.0, label: "s3"}));
    constraints.push(new Constraint({lower: 3.0, a:  1.0, b: 1.0, upper: undefined, label: "s4"}));

    const snippet = new SlackSnippet({
        container: document.getElementById(id)!,
        width: 330,
        height: 330,
        app_width: 300,
        constraints,
        include_polygon: true, 
        interactive_lines: [0,1,2,3,4,5],
        active_lines: [2,5],
        topRightCoord: {x: 6.0, y: 6.0},
        botLeftCoord: {x: -1.0, y: -1.0}
    });

    await snippet.init();
    return { constraints, snippet };
}

export function init(){
    initPivot1("pivot1", "pivot1aux");
    initPivot2("pivot2", "pivot2aux", "pivot2aux2");
    // initPivot3("pivot3");
    initRegion1("region1");
    initRegion2("region2");
    initRegion3("region3");
    initSlack1("slack1");
    initSlack2("slack2");
    initSlack3("slack3");
    initSlack4("slack4");
    initSlack5("slack5");
    const canvas = document.querySelector('#bg') as HTMLCanvasElement;
    init3D(300, 300, 'three-container', canvas);
}

// document.addEventListener('DOMContentLoaded', () => {
//     init();
// });