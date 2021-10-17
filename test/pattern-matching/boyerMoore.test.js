const boyerMoore = require("../../src/pattern-matching/boyerMoore.js");

test('Matching', ()=>{

    let string = 'lorem ipsum dolor sit amet';
    let pattern = 'ipsum';

    expect(boyerMoore(string, pattern, 'abcdefghijklmnopqrstuvwxyz ')).toBe(6);
    
});

test('Complex pattern matching', ()=>{

    let string = 'aaaababaabacaerqw';
    let pattern = 'aabaca';

    expect(boyerMoore(string, pattern, 'abcdefghijklmnopqrstuvwxyz ')).toBe(7);
    
});