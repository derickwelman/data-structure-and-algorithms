function strongConnections(vertices){
    
    let connectionStack = [];
    let connectionMinimum = [];
    let result = [];

    let exploration = [];
    let explorationCount = 0; // Increment on each new vertice that is visited
    
    for (let i = 0; i < vertices.length; i++)
    exploration[i] = 0;
    
    for (let verticeIndex = 0; verticeIndex < vertices.length; verticeIndex++)
        if(exploration[verticeIndex] == 0)
            DFSCFC(verticeIndex);

    return result;

    /**
     * Depth First Search (Tree Edge)
     * @param {int} verticeIndex 
     */
    function DFSCFC(verticeIndex){
        
        exploration[verticeIndex] = ++explorationCount;

        connectionStack.push(verticeIndex);
        connectionMinimum[verticeIndex] = exploration[verticeIndex];

        for(let i = 0; i < vertices[verticeIndex].length; i++){


            let edgeTarget = vertices[verticeIndex][i];
            
            if(exploration[edgeTarget] === 0){
                DFSCFC(edgeTarget);
                connectionMinimum[verticeIndex] = Math.min(connectionMinimum[verticeIndex], connectionMinimum[edgeTarget]);

            }else if(connectionStack.includes[edgeTarget]){
                connectionMinimum[verticeIndex] = Math.min(connectionMinimum[verticeIndex], exploration[edgeTarget]);
            }

            if(connectionMinimum[verticeIndex] === exploration[verticeIndex]){
                let strongConnection = [];
                do{
                    var top = connectionStack.pop();
                    if(top === undefined) break;
                    strongConnection.push(top);
                }while(top !== verticeIndex);
                result.push(strongConnection);
            }

        }
    }
}

module.exports = {strongConnections}