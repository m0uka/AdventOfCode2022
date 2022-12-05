const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\r\n');

let crateLines = [];
let moveLines = [];
let totalCrates = 0;

// Go until empty line
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line === '') {
        const t = lines[i - 1].split(' ');

        crateLines = lines.slice(0, i - 1);
        totalCrates = Number(t[t.length - 2]);
        moveLines = lines.slice(i + 1, lines.length);

        break;
    }
};

let crates = [];
crateLines.forEach((line, i) => {
    const text = line.split('');

    function getCrate(index) {
        if (text[index] === '[') {
            return text[index + 1];
        }
    }

    for (let x = 0, y = 0; x < totalCrates; x++, y += 4) {
        const crate = getCrate(y);
        if (!crates[x]) {
            crates[x] = [];
        }

        if (crate) {
            crates[x].push(crate);
        }
    }
    
});

moveLines.forEach(move => {
    const split = move.match(/[\d\.]+|\D+/g);
    const num = Number(split[1]);
    const from = Number(split[3]) - 1;
    const to = Number(split[5]) - 1;

    for (let i = 0; i < num; i++) {
        const what = crates[from].shift();
        crates[to].unshift(what);
    }
});

const result = crates.map(x => x[0]).join('');
console.log(result);