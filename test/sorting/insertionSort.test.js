const testSort = require('../../src/utils/testSort.js');
const insertionSort = require('../../src/sorting/insertionSort.js');

test('random case', ()=>{
    let array = [7, 4, 1, 8, 5, 2, 9, 6, 3];
    insertionSort(array, array.length);
    expect(testSort(array)).toBeTruthy();
});