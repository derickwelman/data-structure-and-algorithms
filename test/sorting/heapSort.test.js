require('../../src/utils/arrayHelper.js');
const testSort = require('../../src/utils/testSort.js');
const Heap = require('../../src/data-structures/Heap.js');
const heapSort = require('../../src/sorting/heapSort.js');

test('random case', ()=>{
    let array = [7, 4, 1, 8, 5, 2, 9, 6, 3];
    Heap.build(array, array.length);
    heapSort(array, array.length);
    expect(testSort(array)).toBeTruthy();
})