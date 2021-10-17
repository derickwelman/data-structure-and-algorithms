const KMP = require("../../src/pattern-matching/KMP.js");

test('Matching', ()=>{

    let string = 'Lorem ipsum dolor sit amet';
    let pattern = 'ipsum';

    expect(KMP(string, pattern)).toBe(6);
    
});

test('Complex pattern matching', ()=>{

    let string = 'aaaababaabacaerqw';
    let pattern = 'aabaca';

    expect(KMP(string, pattern)).toBe(7);
    
});