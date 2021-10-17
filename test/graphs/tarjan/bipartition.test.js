const { bipartition } = require("../../../src/graphs/tarjan/bipartition.js");

test('Bipartitioned test', () => {
    
    // Even cicles can be bipartitioned
    let vertices = [
        [3,1],
        [0,2],
        [1,3],
        [2,0],
    ];
    
    expect(bipartition(vertices)).toBe(true);

});

test('Not bipartitioned test', () => {
    
    // Odd cicles can not be bipartitioned
    let vertices = [
        [4,1],
        [0,2],
        [1,3],
        [2,4],
        [3,0],
    ];
    
    expect(bipartition(vertices)).toBe(false);

});

