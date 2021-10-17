const testSort = require('../../src/utils/testSort.js');
const quickSort = require('../../src/sorting/quickSort.js');

test('random case', ()=>{
    let array = [7, 4, 1, 8, 5, 2, 9, 6, 3];
    quickSort(array, 1, array.length);
    expect(testSort(array)).toBeTruthy();
});