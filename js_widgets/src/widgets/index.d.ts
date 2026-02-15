export type VectorD = number[];

export interface ConstraintInterface {
    lower: number | undefined;
    a: number;
    b: number;
    upper: number | undefined;
    label: String;
}

export class Constraint {
    constructor({lower, a, b, upper, label}: ConstraintInterface)
}

export interface InterfaceP {
  container: HTMLElement;
  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];
  costFunction?: number[];
  showMatrix: HTMLElement | null;
  showCoords: HTMLElement | null;
  topRightCoord: { x: number; y: number };
  botLeftCoord: { x: number; y: number };
}

export class PivotSnippet {
  constructor(options: InterfaceP);
  init(): Promise<void>;
  destroy(): void;
}

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
}

export class SlackSnippet {
  constructor(options: InterfaceS);
  init(): Promise<void>;
  destroy(): void;
}

export interface InterfaceR {
  container: HTMLElement;
  width: number;
  height: number;
  app_width: number;
  constraints: Constraint[];
}

export class RegionSnippet {
  constructor(options: InterfaceR);
  init(): Promise<void>;
  destroy(): void;
}

export function init3D(containerSelector: string, canvas: HTMLCanvasElement): void;