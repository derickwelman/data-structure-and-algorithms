const BinaryTree = require('../../src/data-structures/BinaryTree.js');

test('creation', ()=>{

    let binaryTree = new BinaryTree();

    let array = [7, 4, 1, 8, 5, 2, 9];
    for (let i = 0; i < array.length; i++) {
        binaryTree.addChild(array[i]);
    }

    expect(binaryTree.root.value).toBe(array[0]);
    expect(binaryTree.root.left.value).toBe(array[1]);
    expect(binaryTree.root.left.left.value).toBe(array[2]);
    expect(binaryTree.root.right.value).toBe(array[3]);
    expect(binaryTree.root.left.right.value).toBe(array[4]);
    expect(binaryTree.root.left.left.right.value).toBe(array[5]);
    expect(binaryTree.root.right.right.value).toBe(array[6]);
    
});