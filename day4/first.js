const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\r\n').map(x => x.split(',').map(y => y.split('-').map(t => Number(t))));

let num = 0;
lines.forEach(line => {
    const first = line[0];
    const second = line[1];

    const firstContained = first[0] >= second[0] && first[1] <= second[1];
    const secondContained = second[0] >= first[0] && second[1] <= first[1];
    if (firstContained || secondContained) {
        num++;
    } 
});

console.log(num);