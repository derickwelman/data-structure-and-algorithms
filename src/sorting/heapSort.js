require('../utils/arrayHelper.js');
const Heap = require('../data-structures/Heap.js');

function heapSort(array, size){
    while(size > 0){
        let max = array.get(1);
        array.set(1, array.get(size));
        array.set(size, max);
        size--;
        Heap.sift(array, 1, size);
    }
}

module.exports = heapSort;