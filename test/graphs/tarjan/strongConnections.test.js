const { strongConnections } = require("../../../src/graphs/tarjan/strongConnections");

test('Strong connections', () => {
    
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

    //jest.setTimeout(5000);

    expect(strongConnections(vertices)).toStrictEqual([[7], [1, 2, 5]], [4], [0], [3, 6]);

})