import {Application, Graphics} from 'pixi.js';
import {Polygon, PagePoint, WindowPoint, CoordPoint, ConstraintLine, Grid, PageToWindow, WindowToCoord, PageToCoord, CoordLimits, LineGenerator,  polygonFromConstraints} from "../../utils/lp.ts";
import {Constraint} from "../../utils/simplex_cpp.ts";

export interface InterfaceR {
  container: HTMLElement;
  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];
};

export class RegionSnippet {
  container: HTMLElement;
  app: Application;

  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];

  constructor({ container, width, height, app_width, constraints }: InterfaceR) {
    this.container = container;
    this.width = width;
    this.height = height;
    this.app_width = app_width;
    this.constraints = constraints;
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

    const coordBotLeft = new CoordPoint(-2.0, -1.0);
    const coordTopRight = new CoordPoint( 8.0, 8.0);
    const limits: CoordLimits = {xmin: coordBotLeft.x, xmax: coordTopRight.x, ymin: coordBotLeft.y, ymax: coordTopRight.y};

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


    const vertices = polygonFromConstraints(this.constraints, limits);
    const polygon = new Polygon(vertices, page_to_coord);
    this.app.stage.addChild(polygon);

    const lineGenerator = new LineGenerator(limits, page_to_coord);
    for(const c of this.constraints){
        lineGenerator.addLine(c);
    }

    const lines: ConstraintLine[] = lineGenerator.getLines();

    for(const line of lines){
        this.app.stage.addChild(line.visual);
    }

    for(const line of lines){
        this.app.stage.addChild(line.hit);
    }
  }

  destroy() {
    this.app.destroy(true);
    this.container.innerHTML = "";
  }

}
