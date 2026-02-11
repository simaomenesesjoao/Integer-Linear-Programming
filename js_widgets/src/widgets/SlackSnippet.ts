import {Application, Graphics} from 'pixi.js';
import {PagePoint, WindowPoint, CoordPoint, ConstraintLine, Grid, PageToWindow, WindowToCoord, PageToCoord, CoordLimits, LineGenerator,  OrthogonalArrow, polygonFromConstraints, Polygon} from "../../utils/lp.ts";
import {Constraint} from "../../utils/simplex_cpp.ts";

export interface InterfaceS {
  container: HTMLElement;
  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];
  include_polygon: Boolean;
  interactive_lines: number[];
  active_lines: number[];
  topRightCoord: {x: number, y: number};
  botLeftCoord: {x: number, y: number};
};

export class SlackSnippet {
  container: HTMLElement;
  app: Application;
  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];
  include_polygon: Boolean;
  interactive_lines: number[];
  active_lines: number[];
  topRightCoord: {x: number, y: number};
  botLeftCoord: {x: number, y: number};

  constructor({ container, width, height, app_width, constraints, include_polygon, interactive_lines, active_lines, topRightCoord, botLeftCoord}: InterfaceS) {
    this.container = container;
    this.width = width;
    this.height = height;
    this.app_width = app_width;
    this.constraints = constraints;
    this.include_polygon = include_polygon;
    this.interactive_lines = interactive_lines;
    this.active_lines = active_lines;
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

    const vertices = polygonFromConstraints(this.constraints, limits);
    const polygon = new Polygon(vertices, page_to_coord);
    if(this.include_polygon){
        this.app.stage.addChild(polygon);
    }

    let grid: Grid = new Grid(coordBotLeft, coordTopRight, 1.0, page_to_coord);
    this.app.stage.addChild(grid);

    const lineGenerator = new LineGenerator(limits, page_to_coord);
    for(const c of this.constraints){
        lineGenerator.addLine(c);
    }

    const lines: ConstraintLine[] = lineGenerator.getLines();
    const arrows: OrthogonalArrow[] = lineGenerator.getArrows();

    for(const line of lines){
        this.app.stage.addChild(line.visual);
    }
    for(const line of lines){
        this.app.stage.addChild(line.hit);
    }

    this.app.stage.addChild(...arrows);
    for(const arrow of arrows){
        this.app.stage.addChild(arrow.lab);
    }

    for(let i=0; i<lines.length; i++){
        if(this.interactive_lines.includes(i)){
            lines[i].onClick = () => {
                arrows[i].toggleActivate();
                lines[i].toggleActivate();
            }
        }
    }
    
    for(let i=0; i<lines.length; i++){
        
        lines[i].onMouseMove = (e) => {
            const pos = e.global;
            mouseWorld.x = pos.x;
            mouseWorld.y = pos.y;
            
            const coordWorld: CoordPoint = page_to_coord.to_coord(mouseWorld);

            for(const arrow of arrows){
                arrow.update(coordWorld);
            }

        }
    }

    for(let i=0; i<lines.length; i++){
        if(this.active_lines.includes(i)){
            arrows[i].activate();
            lines[i].activate();
        }
    }

    let mouseWorld = page_to_coord.to_page(new CoordPoint(xmid, ymid));

    rectangle.eventMode = 'static';
    rectangle.on('pointermove', (event) => {
        const pos = event.global;
        mouseWorld.x = pos.x;
        mouseWorld.y = pos.y;
        
        const coordWorld: CoordPoint = page_to_coord.to_coord(mouseWorld);

        for(const arrow of arrows){
            arrow.update(coordWorld);
        }
    });

    if(this.include_polygon){
        polygon.onMove = (e) => {
            const pos = e.global;
            mouseWorld.x = pos.x;
            mouseWorld.y = pos.y;
            
            const coordWorld: CoordPoint = page_to_coord.to_coord(mouseWorld);

            for(const arrow of arrows){
                arrow.update(coordWorld);
            }
        }
    }




  }

  destroy() {
    this.app.destroy(true);
    this.container.innerHTML = "";
  }

}
