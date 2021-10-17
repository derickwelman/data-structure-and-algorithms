function sift(array, begin, size){
    
    let left = 2 * begin;
    let right = 2 * begin + 1;
    let bigger = begin;
    
    //console.group(`Comparing begin[${begin}]=${array.get(begin)} left[${left}]=${array.get(left)} right[${right}]=${array.get(right)}`);
    
    if(left <= size && array.get(left) > array.get(bigger))
    bigger = left;
    
    if(right <= size && array.get(right) > array.get(bigger))
    bigger = right;
    
    if(bigger !== begin){
        //console.log(`Changing begin[${begin}]=${array.get(begin)} with bigger[${bigger}=${array.get(bigger)}]`)
        let temp = array.get(bigger);
        array.set(bigger, array.get(begin));
        array.set(begin, temp);
        sift(array, bigger, size);
    }
    //console.groupEnd();
    
}

function build(array, size){
    for(var i = Math.floor(size/2); i > 0; i--){
        sift(array, i, size);
    }
}

module.exports = {
    sift,
    build,
};