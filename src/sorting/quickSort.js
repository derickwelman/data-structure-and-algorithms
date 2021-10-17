require('../utils/arrayHelper.js');

function partition(array, min, max){
    let pivot = array.get(min);
    let left = min+1;
    let right = max;
    while(true){
        // increment left until reach a number greater than pivot
        while(left < max && array.get(left) < pivot) left++;
        // decrement right until reach a number greater than pivot
        while(right > min && array.get(right) >= pivot) right--;
        // if they cross each other, then it's done
        if(left >= right) break;
        // if the code reach here, then it's time to swap the left and right values
        let temp = array.get(left);
        array.set(left, array.get(right));
        array.set(right, temp);
    }
    array.set(min, array.get(right));
    array.set(right, pivot);
    return array.get(right);
}

function quickSort(array, min, max){
    if(min < max){
        let pivot = partition(array, min, max);
        quickSort(array, min, pivot-1);
        quickSort(array, pivot+1, max);
    }
}

module.exports = quickSort