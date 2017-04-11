import test from 'ava';
import * as V from '../lib';

test('add vectors', t => {
    const v1 = {
        x: 1,
        y: 2
    };
    const v2 = {
        x: 3,
        y: 4
    };
    t.deepEqual(V.add(v1, v2), {
        x: 4,
        y: 6
    });
});

test('subtract vectors', t => {
    const v1 = {
        x: 1,
        y: 2
    };
    const v2 = {
        x: 3,
        y: 4
    };
    t.deepEqual(V.subtract(v1, v2), {
        x: -2,
        y: -2
    });
});

test('scale vector', t => {
    const v1 = {
        x: 1,
        y: 2
    };
    t.deepEqual(V.scale(2, v1), {
        x: 2,
        y: 4
    });
});

test('vector length positive', t => {
    const v1 = {
        x: 3,
        y: 4
    };
    t.is(5, V.length(v1));
});

test('vector length with one negative', t => {
    const v1 = {
        x: -3,
        y: 4
    };
    t.is(5, V.length(v1));
});

test('normalise on x vector', t => {
    t.deepEqual(V.normalise({x: 1, y: 0}), {
        x: 1,
        y: 0
    });
});

test('normalise on y vector', t => {
    t.deepEqual(V.normalise({x: 0, y: 1}), {
        x: 0,
        y: 1
    });
});

test('normalise on -x vector', t => {
    t.deepEqual(V.normalise({x: -1, y: 0}), {
        x: -1,
        y: 0
    });
});

test('normalise on -y vector', t => {
    t.deepEqual(V.normalise({x: 0, y: -1}), {
        x: 0,
        y: -1
    });
});

test('normalise on 0 vector (special case)', t => {
    t.deepEqual(V.normalise({x: 0, y: 0}), {
        x: 0,
        y: 0
    });
});

test('normalise', t => {
    const v1 = {
        x: 1,
        y: -1
    };
    const inv_sqrt2 = 1 / Math.sqrt(2);
    t.deepEqual(V.normalise(v1), {
        x: inv_sqrt2,
        y: -inv_sqrt2
    });
});

test('distance x', t => {
    const p1 = {x: 1, y: 1};
    const p2 = {x: -1, y: 1};
    t.is(V.distance(p2, p1), 2);
    t.is(V.distance(p1, p2), 2);
})

test('distance', t => {
    const p1 = {x: 1, y: 1};
    const p2 = {x: -1, y: -1};
    t.is(V.distance(p2, p1), 2 * Math.sqrt(2));
    t.is(V.distance(p1, p2), 2 * Math.sqrt(2));
})