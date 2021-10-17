require('../utils/arrayHelper.js');

function selectionSort(array, size){
    for(var i = size; i > 0; i--){
        
        let max = i;
        
        for (let j = 1; j <= i; j++) {
            if(array.get(j) > array.get(max)){
                max = j;
            }
        }

        if(max !== i){
            let temp = array.get(max);
            array.set(max, array.get(i));
            array.set(i, temp);
        }

    }
}

module.exports = selectionSort;