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
function subtract(left, right) {
    return {
        x: left.x - right.x,
        y: left.y - right.y
    };
}
exports.subtract = subtract;
function distance(from, to) {
    return length(subtract(to, from));
}
exports.distance = distance;
function length(_a) {
    var x = _a.x, y = _a.y;
    return Math.sqrt(x * x + y * y);
}
exports.length = length;
function normalise(v) {
    // FIXME: test this, especially for divide-by-zero...
    var vLength = length(v);
    return (vLength === 0)
        ? v
        : scale(1.0 / vLength, v);
}
exports.normalise = normalise;
exports.normalize = normalise; // alias
function unitDirection(from, to) {
    var direction = subtract(to, from);
    return normalise(direction);
}
exports.unitDirection = unitDirection;
