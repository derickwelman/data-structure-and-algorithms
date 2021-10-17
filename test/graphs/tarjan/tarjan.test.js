const {EdgeTypes, tarjan} = require('../../../src/graphs/tarjan/tarjan.js');

test('EdgeTypes', () => {
    
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

    let edgeTypes = tarjan(vertices);

    expect(edgeTypes[0][1]).toBe(EdgeTypes.TREE);
    expect(edgeTypes[1][2]).toBe(EdgeTypes.TREE);
    expect(edgeTypes[2][5]).toBe(EdgeTypes.TREE);
    expect(edgeTypes[5][1]).toBe(EdgeTypes.BACKWARD);
    expect(edgeTypes[0][4]).toBe(EdgeTypes.TREE);
    expect(edgeTypes[4][2]).toBe(EdgeTypes.CROSSING);
    expect(edgeTypes[0][5]).toBe(EdgeTypes.FORWARD);
    expect(edgeTypes[3][2]).toBe(EdgeTypes.CROSSING);
    expect(edgeTypes[3][4]).toBe(EdgeTypes.CROSSING);
    expect(edgeTypes[3][6]).toBe(EdgeTypes.TREE);
    expect(edgeTypes[6][3]).toBe(EdgeTypes.BACKWARD);

})