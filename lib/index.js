export function scale(factor, vector) {
    return {
        x: factor * vector.x,
        y: factor * vector.y
    };
}
export function add(left, right) {
    return {
        x: left.x + right.x,
        y: left.y + right.y
    };
}
