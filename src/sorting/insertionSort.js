require('../utils/arrayHelper.js');

function insertionSort(array, size){
    for(var i = 2; i <= size; i++){
        for(var j = i; array.get(j) < array.get(j-1); j--){
            var temp = array.get(j);
            array.set(j, array.get(j-1));
            array.set(j-1, temp);
        }
    }
}

module.exports = insertionSort;