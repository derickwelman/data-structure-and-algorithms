const { acyclicTest } = require('../../../src/graphs/tarjan/acyclicTest.js');
const {EdgeTypes, tarjan} = require('../../../src/graphs/tarjan/tarjan.js');

test('Cyclic graph', () => {
    
    // 0 1 2 3 4 5 6 7 Index
    // A B C D E F G H Correspondent letter
    let vertices = [
        [1, 4, 5],
        [2],
        [5],
        [2, 4, 6],
        [2],
        [1],
        [3],
        [],
    ];

    expect(acyclicTest(vertices)).toStrictEqual([0,1,2,5]);

});

test('Cyclic graph', () => {
    
    // 0 1 2 3 4 5 6 7 Index
    // A B C D E F G H Correspondent letter
    let vertices = [
        [1, 4, 5],
        [2],
        [5],
        [4, 6],
        [6],
        [7],
        [],
        [],
    ];

    expect(acyclicTest(vertices)).toBe(null);

});