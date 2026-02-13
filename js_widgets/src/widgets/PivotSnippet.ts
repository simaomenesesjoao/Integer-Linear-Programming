import {Application, Graphics} from 'pixi.js';
import {Arrow, LineManager, PagePoint, WindowPoint, CoordPoint, ConstraintLine, Grid, PageToWindow, WindowToCoord, PageToCoord, OrthogonalArrow, CoordLimits, LineGenerator, TableauToText, polygonFromConstraints, MatrixView} from "../../utils/lp.ts";
import {Constraint} from "../../utils/simplex_cpp.ts";

export interface InterfaceP {
  container: HTMLElement;
  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];
  costFunction: number[] | undefined;
  showMatrix: boolean;
  showCoords: boolean;
  topRightCoord: {x: number, y: number};
  botLeftCoord: {x: number, y: number};
};

export class PivotSnippet {
  container: HTMLElement;
  private app: Application;
  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];
  costFunction: number[] | undefined;
  showMatrix: boolean;
  showCoords: boolean;
  topRightCoord: {x: number, y: number};
  botLeftCoord: {x: number, y: number};

  constructor({container, width, height, app_width, constraints, costFunction, showMatrix, showCoords, topRightCoord, botLeftCoord}: InterfaceP) {
    this.container = container;
    this.width = width;
    this.height = height;
    this.app_width = app_width;
    this.constraints = constraints;
    this.costFunction = costFunction;
    this.showMatrix = showMatrix;
    this.showCoords = showCoords;
    this.topRightCoord = topRightCoord;
    this.botLeftCoord = botLeftCoord;
    this.app = new Application();
  }

  async init() {
    await this.app.init({
      width: this.width,
      height: this.height,
      backgroundAlpha: 0,
      antialias: true,
    });
    this.container.appendChild(this.app.canvas);

    // Position of the window in absolute coordinates
    const window_origin = new PagePoint(0, this.app_width);
    const page_to_window: PageToWindow = new PageToWindow(window_origin);

    // Two coordinate systems live in the exact same space: 
    // - window, where the pixels are units
    // - coords, where units are arbitrary
    // The points need to match
    const windowBotLeft = new WindowPoint(0, 0 );
    const windowTopRight = new WindowPoint(this.app_width, this.app_width);

    const coordTopRight = new CoordPoint(this.topRightCoord.x, this.topRightCoord.y);
    const coordBotLeft = new CoordPoint(this.botLeftCoord.x, this.botLeftCoord.y);

    const limits: CoordLimits = {xmin: coordBotLeft.x, xmax: coordTopRight.x, ymin: coordBotLeft.y, ymax: coordTopRight.y};
    const xmid = (limits.xmin + limits.xmax)*0.5;
    const ymid = (limits.ymin + limits.ymax)*0.5;

    const window_to_coord: WindowToCoord = new WindowToCoord(windowBotLeft, windowTopRight, coordBotLeft, coordTopRight);

    const page_to_coord: PageToCoord = new PageToCoord(window_to_coord, page_to_window);
    
    const p1 = page_to_window.to_page(windowBotLeft);
    const p2 = page_to_window.to_page(windowTopRight);

    const rectangle = new Graphics()
        .rect(p1.x, p2.y, p2.x-p1.x, p1.y-p2.y)
        .fill({
            color: 0xeeeeee,
            alpha: 0.8
        });
    
    this.app.stage.addChild(rectangle);
    
    let grid: Grid = new Grid(coordBotLeft, coordTopRight, 1.0, page_to_coord);
    this.app.stage.addChild(grid);

    const constraints = this.constraints;

    const vertices = polygonFromConstraints(constraints, limits);
    const verticesPage = vertices.flatMap(p => {
        const pagePoint: PagePoint = page_to_coord.to_page(p);
        return [pagePoint.x, pagePoint.y];
    });
    
    const g = new Graphics();

    g.beginFill(0x3399ff, 0.2);
    g.drawPolygon(verticesPage);
    g.endFill();
    this.app.stage.addChild(g);

    const lineGenerator = new LineGenerator(limits, page_to_coord);
    for(const c of constraints){
        lineGenerator.addLine(c);
    }

    let cost = new CoordPoint(0, 0);
    if(this.costFunction !== undefined){
        cost = new CoordPoint(this.costFunction[0], this.costFunction[1]);
    }
    console.log("PivotSpinnet: ", cost);
    const costArrow = new Arrow(cost, page_to_coord);
    this.app.stage.addChild(costArrow);

    const lines: ConstraintLine[] = lineGenerator.getLines();
    const arrows: OrthogonalArrow[] = lineGenerator.getArrows();
    const lineManager: LineManager = lineGenerator.getManager(this.costFunction);

    const tableauToText = new TableauToText(lineManager.tableau.num_constraints, lineManager.labelToId, lineManager.idToLabel, page_to_window);


    const matrixView = new MatrixView();
    if(this.showMatrix){
        matrixView.draw(lineManager.tableau.matrix, {fontSize: 20 });
        matrixView.position = {x: 600, y:100};
        this.app.stage.addChild(matrixView);
    }
    

    if(this.showCoords){
        this.app.stage.addChild(...tableauToText.dictionaryTexts);
        this.app.stage.addChild(tableauToText.costText);
        this.app.stage.addChild(tableauToText.descriptionText);
        this.app.stage.addChild(tableauToText.warningText);
        this.app.stage.addChild(tableauToText.titleText);
    }
    
    tableauToText.pos(new WindowPoint(this.app_width + 50, 50));

    for(const line of lines){
        this.app.stage.addChild(line.visual);
        this.app.stage.addChild(line.labelText);
    }

    for(const line of lines){
        this.app.stage.addChild(line.hit);
    }
    
    this.app.stage.addChild(...arrows);
    for(const arrow of arrows){
        this.app.stage.addChild(arrow.lab);
    }

    let mouseWorld = page_to_coord.to_page(new CoordPoint(xmid, ymid));

    for(const line of lines){
        line.onClick = () => {
            console.log("Clicked");
            lineManager.update(line.id, line.active);
        };

        line.onMouseMove = (event) => {

            const pos = event.global;
            mouseWorld.x = pos.x;
            mouseWorld.y = pos.y;
            // console.log("mouse move");

            const coordWorld: CoordPoint = page_to_coord.to_coord(mouseWorld);

            for(const arrow of arrows){
                arrow.update(coordWorld);
            }
            costArrow.update(coordWorld);
        }
    }

    lineManager.onUpdate = () => {

        console.log("coordinates:", lineManager.tableau.extract_coordinates());
        const coordWorld: CoordPoint = page_to_coord.to_coord(mouseWorld);
        for(const line of lineManager.activeLines()){
            lines[line].activate();
            arrows[line].activate();
            arrows[line].update(coordWorld);
        }
        costArrow.update(coordWorld);

        for(const line of lineManager.inactiveLines()){
            lines[line].deactivate();
            arrows[line].deactivate();
        }

        tableauToText.update(lineManager.tableau);
        tableauToText.resetWarning();


        if(this.showMatrix){
            matrixView.draw(lineManager.tableau.matrix, {fontSize: 20 });
        }
        

    };

    lineManager.onWarning = () => {
        tableauToText.setWarning();
    };

    lineManager.onUpdate();

    rectangle.eventMode = 'static';
    rectangle.on('pointermove', (event) => {
        const pos = event.global;
        mouseWorld.x = pos.x;
        mouseWorld.y = pos.y;
        
        const coordWorld: CoordPoint = page_to_coord.to_coord(mouseWorld);

        for(const arrow of arrows){
            arrow.update(coordWorld);
        }
        costArrow.update(coordWorld);

    });


  }

  destroy() {
    this.app.destroy(true);
    this.container.innerHTML = "";
  }
}
