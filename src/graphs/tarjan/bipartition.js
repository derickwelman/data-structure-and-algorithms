function bipartition(vertices){
    
    let exploration = [], complementation = [];

    for (let i = 0; i < vertices.length; i++) {
        exploration[i] = 0;
        complementation[i] = 0;
    }

    for (let verticeIndex = 0; verticeIndex < vertices.length; verticeIndex++)
        if(exploration[verticeIndex] == 0)
            if(DFSBP(verticeIndex, 2) === false)
                return false;

    return true;

    /**
     * Depth First Search (Tree Edge)
     * @param {int} verticeIndex 
     */
    function DFSBP(verticeIndex, color){
        
        color = (color % 2) + 1; // Change to next color
        exploration[verticeIndex] = color;

        for(let i = 0; i < vertices[verticeIndex].length; i++){
            let edgeTarget = vertices[verticeIndex][i];
            
            // Case the target not is not visited yet
            if(exploration[edgeTarget] === 0){
                if(DFSBP(edgeTarget, color) == 0) return false;
            
            // Case the target node exploration number is higher than the origin
            }else if(exploration[edgeTarget] === color){
                return false;
            }

            return true;

        }
        
    }


}

module.exports = {bipartition}