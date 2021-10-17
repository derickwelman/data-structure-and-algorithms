Array.prototype.set = function(position, element){
    this[position-1] = element;
    return this;
}

Array.prototype.get = function(position){
    return this[position-1];
}