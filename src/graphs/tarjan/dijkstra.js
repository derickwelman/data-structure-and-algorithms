const MinHeap = require("../../data-structures/MinHeap.js");

function dijkstra(edges, weights, start){
    
    let numberOfVertices = edges.length;
    let distances = [];
    let previous = [];
    let unfinished = new MinHeap();    
    
    for (let i = 0; i < numberOfVertices; i++) {
        distances[i] = Number.POSITIVE_INFINITY;
        unfinished.insert(i);
    }

    distances[start] = 0;

    while(unfinished.size > 0){
        
        let origin = unfinished.extractMin();

        for (let i = 0; i < edges[origin].length; i++) {
            let target = edges[origin][i];
            if(distances[target] > distances[origin] + weights[origin][i]){
                distances[target] = distances[origin] + weights[origin][i];
                previous[target] = origin;
            }
        }

    }

    return {distances, previous};

}

module.exports = dijkstra;