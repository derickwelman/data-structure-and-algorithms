const testSort = require('../../src/utils/testSort.js');
const bubbleSort = require('../../src/sorting/bubbleSort.js');

test('random case', ()=>{
    let array = [7, 4, 1, 8, 5, 2, 9, 6, 3];
    bubbleSort(array, array.length);
    expect(testSort(array)).toBeTruthy();
});