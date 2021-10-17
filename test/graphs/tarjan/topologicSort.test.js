const {topologicSort} = require("../../../src/graphs/tarjan/topologicSort.js");

test('Topologic Sort', () => {
    
    // 0 1 2 3 4 5 6 7 Index
    // A B C D E F G H Correspondent letter
    let vertices = [
        [],
        [10],
        [5, 7, 8],
        [],
        [7],
        [1, 10, 11],
        [],
        [0],
        [1, 5, 6],
        [8],
        [],
        [3],
    ];
    
    expect(topologicSort(vertices)).toStrictEqual([9, 4, 2, 8, 6, 7, 5, 11, 3, 1, 10, 0]);

});