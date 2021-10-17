require('../utils/arrayHelper');

function bubbleSort(array, size){

    for(var i=size; i > 0; i--){
        for(var j = 1; j < i; j++){
            if(array.get(j) > array.get(j+1)){
                let temp = array.get(j);
                array.set(j, array.get(j+1));
                array.set(j+1, temp);
            }
        }
    }

}

module.exports = bubbleSort;