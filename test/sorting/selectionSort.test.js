const testSort = require('../../src/utils/testSort.js');
const selectionSort = require('../../src/sorting/selectionSort.js');

test('random case', ()=>{
    let array = [7, 4, 1, 8, 5, 2, 9, 6, 3];
    selectionSort(array, array.length);
    expect(testSort(array)).toBeTruthy();
});