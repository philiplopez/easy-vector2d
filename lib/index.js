"use strict";
exports.__esModule = true;
function scale(factor, vector) {
    return {
        x: factor * vector.x,
        y: factor * vector.y
    };
}
exports.scale = scale;
function add(left, right) {
    return {
        x: left.x + right.x,
        y: left.y + right.y
    };
}
exports.add = add;
