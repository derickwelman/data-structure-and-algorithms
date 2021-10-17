function boyerMoore(string, pattern, alphabet){
    
    let table = [];
    
    for (let k = 0; k < alphabet.length; k++) {
        table[alphabet[k]] = -1;    
    }

    for (let k = 0; k < pattern.length; k++) {
        table[pattern[k]] = k
    }

    let i = pattern.length - 1;
    let j = pattern.length - 1;
    
    while(i < string.length){
        
        if(string[i] === pattern[j]){
        
            if(j === 0) return i;
            else{ i--; j--; }
        
        }else{

            let x = table[string[i]];
            i += pattern.length - Math.min(j, 1+x);
            j = pattern.length - 1;

        }
    }

    return -1;

}

module.exports = boyerMoore;