function topologicSort(vertices){

    let sortStack = [];
    let exploration = [], complementation = [];
    
    let explorationCount = 0; // Increment on each new vertice that is visited
    let complementationCount = 0; // Increment on each vertice that finish its iterations (has no more connections to visit)
    
    for (let i = 0; i < vertices.length; i++) {
        exploration[i] = 0;
        complementation[i] = 0;
    }
    
    for (let verticeIndex = 0; verticeIndex < vertices.length; verticeIndex++)
        if(exploration[verticeIndex] == 0)
        DFSOT(verticeIndex);

    /**
     * Depth First Search (Tree Edge)
     * @param {int} verticeIndex 
     */
    function DFSOT(verticeIndex){
        
        exploration[verticeIndex] = ++explorationCount;

        for(let i = 0; i < vertices[verticeIndex].length; i++){

            let edgeOrigin = verticeIndex;
            let edgeTarget = vertices[verticeIndex][i];
            
            // Case the target not is not visited yet
            if(exploration[edgeTarget] === 0)
                DFSOT(edgeTarget);

        }
        
        sortStack.push(verticeIndex);
        complementation[verticeIndex] = ++ complementationCount;
        
    }

    return sortStack.reverse();

}

module.exports = {topologicSort}