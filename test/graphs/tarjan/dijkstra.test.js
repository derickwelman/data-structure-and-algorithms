const dijkstra = require("../../../src/graphs/tarjan/dijkstra.js");

test('Dijkstra', () => {

    let start = 0;

    let edges = [
        [1,2],      // A 0
        [3,5],      // B 1
        [1,4,5],    // C 2
        [],         // D 3
        [1,3],      // E 4
        [4],        // F 5
    ];

    let weights = [
        [7,1],      // A
        [4,1],      // B
        [5,2,3],    // C
        [],         // D
        [2,5],      // E
        [3],        // F
    ];

    let {distances, previous} = dijkstra(edges, weights, start);

    expect(distances).toStrictEqual([0,5,1,8,3,4]);
    expect(previous).toEqual([undefined,4,0,4,2,2]);

});