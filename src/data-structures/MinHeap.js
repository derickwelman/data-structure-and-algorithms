require('../utils/arrayHelper.js');

function MinHeap(array, size){

    this.array = array || [];
    this.size = size || this.array.length;

}

MinHeap.prototype.bubble = function(position){
    
    if(position < 2) return;

    let parentPosition = Math.floor(position/2);
    if(this.array.get(position) < this.array.get(parentPosition)){
        
        let temp = this.array.get(position);
        this.array.set(position, this.array.get(parentPosition))
        this.array.set(parentPosition, temp);
        
        this.bubble(parentPosition);

    }

}

MinHeap.prototype.sift = function(position){
    
    let left = 2 * position;
    let right = 2 * position + 1;
    let smaller = position;
    
    //console.group(`Comparing position[${position}]=${this.array.get(position)} left[${left}]=${this.array.get(left)} right[${right}]=${this.array.get(right)}`);
    
    if(left <= this.size && this.array.get(left) < this.array.get(smaller))
    smaller = left;
    
    if(right <= this.size && this.array.get(right) < this.array.get(smaller))
    smaller = right;
    
    if(smaller !== position){
        //console.log(`Changing position[${position}]=${this.array.get(position)} with smaller[${smaller}=${this.array.get(smaller)}]`)
        let temp = this.array.get(smaller);
        this.array.set(smaller, this.array.get(position));
        this.array.set(position, temp);
        this.sift(smaller);
    }
    //console.groupEnd();
    
}

MinHeap.prototype.modify = function(position, value){
    
    if(position < 1 || position > this.array.length) throw new Error('Heap overflow');

    this.array.set(position, value);

    this.bubble(position);
    this.sift(position);

}

MinHeap.prototype.insert = function(value){
    this.array.set(++this.size, value);
    this.bubble(this.size);
}

MinHeap.prototype.min = function(){
    return this.array.get(1);
}

MinHeap.prototype.extractMin = function(){
    
    if(this.size < 1) throw new Error('Heap underflow');
    
    let max = this.array.get(1);
    this.array.set(1, this.array.get(this.size--));
    this.sift(1);

    return max;

}

MinHeap.build = function(array){
    
    let heap = new MinHeap(array, array.length);

    for(let position = Math.floor(heap.size/2); position > 0; position--){
        heap.sift(position);
    }

    return heap;

}

module.exports = MinHeap;