function sufix(string, length){
    return string.substr(0,length);
}

function buildAutomaton(pattern, alphabet){
    
    let automaton = [];

    for (let i = 0; i < pattern.length; i++) {
        for (let char = 0; char < alphabet.length; char++) {
            
            // Use i+2 since the k that will receive this value will decrement.
            // i.e. consider that we are using the next element (s+1);
            let state = Math.min(i + 2, pattern.length + 1);
            
            do{
                state--;
            }while(sufix(pattern, i-1).startsWith(sufix(pattern, state-1)));
            
            if(!automaton[i])automaton[i] = [];
            automaton[i][char] = state;
        }
    }

    return automaton;

}
