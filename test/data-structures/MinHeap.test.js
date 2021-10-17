const MinHeap = require('../../src/data-structures/MinHeap.js');

test('Heap test', ()=>{
    
    let heap = new MinHeap();

    expect(heap.size).toBe(0);
    heap.insert(5);
    expect(heap.array).toStrictEqual([5]);
    expect(heap.size).toBe(1);
    heap.insert(6);
    expect(heap.array).toStrictEqual([5,6]);
    expect(heap.size).toBe(2);
    heap.insert(2);
    expect(heap.array).toStrictEqual([2,6,5]);
    expect(heap.size).toBe(3);
    heap.insert(8);
    expect(heap.array).toStrictEqual([2,6,5,8]);
    expect(heap.size).toBe(4);
    
    expect(heap.extractMin()).toBe(2);
    expect(heap.array).toStrictEqual([5,6,8,8]);
    expect(heap.size).toBe(3);

    
});

test('Build', ()=>{
    
    let heap = MinHeap.build([1,5,9,4,8,7,6,2,3]);

    expect(heap.array).toStrictEqual([1,2,6,3,8,7,9,4,5]);
    
});