export interface Vector2D {
    x : number,
    y : number
}

export function scale(factor : number, vector : Vector2D) : Vector2D {
    return {
        x: factor * vector.x,
        y: factor * vector.y
    }
}

export function add(left : Vector2D, right : Vector2D) : Vector2D {
    return {
        x: left.x + right.x,
        y: left.y + right.y
    }
}