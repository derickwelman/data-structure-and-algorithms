function LinkedListNode(value){
    this.value = value;
    this.next = null;
}

function DoubleLinkedListNode(value){
    this.value = value;
    this.next = null;
}

module.exports = {
    LinkedListNode,
    DoubleLinkedListNode,
}