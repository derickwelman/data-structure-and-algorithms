require('../utils/arrayHelper.js');
const MaxHeap = require('../data-structures/MaxHeap.js');

function heapSort(array, size){

    let heap = MaxHeap.build(array, size);

    while(heap.size > 0){
        let max = heap.max();
        array.set(1, array.get(heap.size));
        array.set(heap.size, max);
        heap.size--;
        heap.sift(1);
    }

}

module.exports = heapSort;