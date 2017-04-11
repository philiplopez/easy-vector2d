export interface Vector2D {
    x: number;
    y: number;
}
export declare function scale(factor: number, vector: Vector2D): Vector2D;
export declare function add(left: Vector2D, right: Vector2D): Vector2D;
export declare function subtract(left: Vector2D, right: Vector2D): Vector2D;
export declare function distance(from: Vector2D, to: Vector2D): number;
export declare function length({x, y}: Vector2D): number;
export declare function normalise(v: Vector2D): Vector2D;
export declare const normalize: typeof normalise;
export declare function unitDirection(from: Vector2D, to: Vector2D): Vector2D;
