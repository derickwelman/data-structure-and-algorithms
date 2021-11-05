const { strongConnections } = require("../../../src/graphs/tarjan/strongConnections");

test('Strong connections', () => {
    
    let graph = [
        [1, 4, 5],  // A 0
        [2],        // B 1
        [5],        // C 2
        [2, 4, 6],  // D 3
        [2],        // E 4
        [1],        // F 5
        [3],        // G 6
        [],         // H 7
    ];

    let connections = strongConnections(graph);
    console.log(connections);
    expect(strongConnections(graph)).toStrictEqual([[7], [1, 2, 5]], [4], [0], [3, 6]);

})