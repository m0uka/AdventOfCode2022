const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\r\n');

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const grouped = lines.map(line => {
    return [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)]
});

let sum = 0;
grouped.forEach(group => {
    group[2] = [];
    group[0].split('').forEach(l => {
        if (group[1].includes(l) && !group[2].includes(l)) {
            group[2].push(l);
            sum += alphabet.indexOf(l) + 1;
        }
    });
});

console.log(sum);