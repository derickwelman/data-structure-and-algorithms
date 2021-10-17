/**
 * Test if a graph is acyclic and, in a negative case return the cicle found
 * @param {Array} vertices 
 * @returns null when is acyclic or a cicle stack otherwise
 */
function acyclicTest(vertices){
    
    let cicleStack = [];
    let isAcyclic = true;

    let exploration = [], complementation = [];

    let explorationCount = 0; // Increment on each new vertice that is visited
    let complementationCount = 0; // Increment on each vertice that finish its iterations (has no more connections to visit)

    for (let i = 0; i < vertices.length; i++) {
        exploration[i] = 0;
        complementation[i] = 0;
    }

    for (let verticeIndex = 0; verticeIndex < vertices.length; verticeIndex++)
        if(exploration[verticeIndex] == 0)
            if(DFSA(verticeIndex) === true) return cicleStack;

    /**
     * Depth First Search (Tree Edge)
     * @param {int} verticeIndex 
     */
    function DFSA(verticeIndex){

        exploration[verticeIndex] = ++explorationCount;
        cicleStack.push(verticeIndex);
        
        for(let i = 0; i < vertices[verticeIndex].length; i++){
            let edgeOrigin = verticeIndex;
            let edgeTarget = vertices[verticeIndex][i];
            
            // Case the target not is not visited yet
            if(exploration[edgeTarget] === 0){
                if(DFSA(edgeTarget) === true) return true;

            // Case the target node exploration number is smaller than the origin and isn't visited yet
            }else if(exploration[edgeTarget] < exploration[edgeOrigin] && complementation[edgeTarget] === 0){
                isAcyclic = false;
                return true;
            }
        }

        cicleStack.pop();
        complementation[verticeIndex] = ++ complementationCount;
        
    }

    return null;

}

module.exports = {acyclicTest}