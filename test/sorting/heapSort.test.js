require('../../src/utils/arrayHelper.js');
const testSort = require('../../src/utils/testSort.js');
const MaxHeap = require('../../src/data-structures/MaxHeap.js');
const heapSort = require('../../src/sorting/heapSort.js');

test('Random case', ()=>{
    let array = [7, 4, 1, 8, 5, 2, 9, 6, 3];
    heapSort(array, array.length);
    expect(testSort(array)).toBeTruthy();
});