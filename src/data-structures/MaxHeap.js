require('../utils/arrayHelper.js');

function MaxHeap(array, size){

    this.array = array || [];
    this.size = size || this.array.length;

}

MaxHeap.prototype.bubble = function(position){
    
    if(position < 2) return;

    let parentPosition = Math.floor(position/2);
    if(this.array.get(position) > this.array.get(parentPosition)){
        
        let temp = this.array.get(position);
        this.array.set(position, this.array.get(parentPosition))
        this.array.set(parentPosition, temp);
        
        this.bubble(parentPosition);

    }

}

MaxHeap.prototype.sift = function(position){
    
    let left = 2 * position;
    let right = 2 * position + 1;
    let bigger = position;
    
    //console.group(`Comparing position[${position}]=${this.array.get(position)} left[${left}]=${this.array.get(left)} right[${right}]=${this.array.get(right)}`);
    
    if(left <= this.size && this.array.get(left) > this.array.get(bigger))
    bigger = left;
    
    if(right <= this.size && this.array.get(right) > this.array.get(bigger))
    bigger = right;
    
    if(bigger !== position){
        //console.log(`Changing position[${position}]=${this.array.get(position)} with bigger[${bigger}=${this.array.get(bigger)}]`)
        let temp = this.array.get(bigger);
        this.array.set(bigger, this.array.get(position));
        this.array.set(position, temp);
        this.sift(bigger);
    }
    //console.groupEnd();
    
}

MaxHeap.prototype.modify = function(position, value){
    
    if(position < 1 || position > this.array.length) throw new Error('Heap overflow');

    this.array.set(position, value);

    this.bubble(position);
    this.sift(position);

}

MaxHeap.prototype.insert = function(value){
    this.array.set(++this.size, value);
    this.bubble(this.size);
}

MaxHeap.prototype.max = function(){
    return this.array.get(1);
}

MaxHeap.prototype.extractMax = function(){
    
    if(this.size < 1) throw new Error('Heap underflow');
    
    let max = this.array.get(1);
    this.array.set(1, this.array.get(this.size--));
    this.sift(1);

    return max;

}

MaxHeap.build = function(array){
    
    let heap = new MaxHeap(array, array.length);

    for(let position = Math.floor(heap.size/2); position > 0; position--){
        heap.sift(position);
    }

    return heap;

}

module.exports = MaxHeap;