const { LinkedListNode } = require("./LinkedList");

function VectorStack(max){
    
    this.vector = [];
    this.pointer = -1;
    this.max = max;

}

VectorStack.prototype.size = function(){
    return this.pointer + 1;
}

VectorStack.prototype.isEmpty = function(){
    return this.pointer < 0;
}

VectorStack.prototype.top = function(){
    return this.vector[this.pointer];
}

VectorStack.prototype.push = function(number){
    if(this.pointer + 1 === this.max) throw new Error('Stack overflow');
    this.vector[++this.pointer] = number;
}

VectorStack.prototype.pop = function(){
    if(this.isEmpty) throw new Error('Empty stack');
    return this.vector[this.pointer--];
}

/* ============== Linked List ============== */

function ListStack(){
    this.top = null;
}

ListStack.prototype.size = function(){
    
    if(!this.top) return 0;
    
    let counter = 0;
    let current = this.root;
    
    while(current !== null){
        counter++;
    };
    
}

ListStack.prototype.isEmpty = function(){

}

ListStack.prototype.top = function(){

}

ListStack.prototype.push = function(){

}

ListStack.prototype.pop = function(){}