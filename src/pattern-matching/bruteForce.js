function bruteForce(string, pattern){
    for(let i = 0; i < string.length; i++){
        
        let j = 0;
        
        while(string[i+j] === pattern[j] && j < pattern.length && i+j < string.length){
            j++;
        }

        if(j == pattern.length) return i;

    }

    return -1;
}