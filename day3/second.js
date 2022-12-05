const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\r\n');

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const chunks = lines.reduce((all,one,i) => {
    const ch = Math.floor(i/3); 
    all[ch] = [].concat((all[ch]||[]),one); 
    return all
}, []);

let sum = 0;
chunks.forEach(chunk => {

    const chunk1 = chunk[1].split('');
    const chunk2 = chunk[2].split('');
    const usedLetters = [];

    chunk[0].split('').forEach(x => {
        if (chunk1.includes(x) && chunk2.includes(x) && !usedLetters.includes(x)) {
            usedLetters.push(x);
            sum += alphabet.indexOf(x) + 1;
        }
    });

});

console.log(sum)