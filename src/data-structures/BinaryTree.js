function BinaryTreeNode(value){
    this.value = value
    this.left = null;
    this.right = null;
}

function BinaryTree(){
    this.root = null;
}

BinaryTree.prototype.addChild = function(number, parent){

    if(this.root === null){
        this.root = new BinaryTreeNode(number);
        return;
    }

    if(!parent) parent = this.root;

    if(number < parent.value){

        if(parent.left === null){
            parent.left = new BinaryTreeNode(number);
        }else{
            this.addChild(number, parent.left);
        }

    }else{

        if(parent.right === null){
            parent.right = new BinaryTreeNode(number);
        }else{
            this.addChild(number, parent.right);
        }

    }

};

module.exports = BinaryTree;