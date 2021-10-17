// Knuth Morris Pratt

function KMP(string, pattern){
    const failureFunction = buildFailureFunction(pattern);
    let i = 0; // String iterator
    let j = 0; // Pattern iterator

    while(i < string.length){

        if(string[i] === pattern[j]){

            if(j === pattern.length - 1)
                return i - j;
            else{
                i++; j++;
            }

        }else{

            if(j !== 0)
                j = failureFunction[j - 1];
            else
                i++;

        }

    }
    return -1;
}

function buildFailureFunction(pattern){
    let failureFunction = [];
    failureFunction[0] = 0;
    
    let i = 1, j = 0;

    while(i < pattern.length){
        // If equals, increment both
        if(pattern[i] === pattern[j])
            failureFunction[i++] = ++j;
        // If not equal, but j is 0, then only iterate to next character
        else if(j == 0)
            failureFunction[i++] = 0;
        // If not equal and j is bigger than 0, then jump to the last prefix
        // character -1 and test again recursively
        else
            j = failureFunction[j-1];
    }

    return failureFunction;
}

module.exports = KMP;