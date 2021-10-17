const MaxHeap = require('../../src/data-structures/MaxHeap.js');

test('Heap test', ()=>{
    
    let heap = new MaxHeap();

    expect(heap.size).toBe(0);
    heap.insert(5);
    expect(heap.array).toStrictEqual([5]);
    expect(heap.size).toBe(1);
    heap.insert(6);
    expect(heap.array).toStrictEqual([6,5]);
    expect(heap.size).toBe(2);
    heap.insert(2);
    expect(heap.array).toStrictEqual([6,5,2]);
    expect(heap.size).toBe(3);
    heap.insert(8);
    expect(heap.array).toStrictEqual([8,6,2,5]);
    expect(heap.size).toBe(4);
    
    expect(heap.extractMax()).toBe(8);
    expect(heap.array).toStrictEqual([6,5,2,5]);
    expect(heap.size).toBe(3);

    
});

test('Build', ()=>{
    
    let heap = MaxHeap.build([1,5,9,4,8,7,6,2,3]);

    expect(heap.array).toStrictEqual([9,8,7,4,5,1,6,2,3]);
    
});