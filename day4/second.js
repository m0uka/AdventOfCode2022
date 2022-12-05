const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\r\n').map(x => x.split(',').map(y => y.split('-').map(t => Number(t))));

let num = 0;
lines.forEach(line => {
    const first = line[0];
    const second = line[1];

    const inRange = (a, range) => a >= range[0] && a <= range[1]

    const firstOverlap = inRange(first[0], second) || inRange(first[1], second);
    const secondOverlap = inRange(second[0], first) || inRange(second[1], first);
    if (firstOverlap || secondOverlap) {
        num++;
    } 
});

console.log(num);