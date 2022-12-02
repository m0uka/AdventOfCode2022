const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const groups = input.split('\r\n').map(x => x.split(' '));

const possibleWins = {
    ["A"]: "Z",
    ["B"]: "X",
    ["C"]: "Y"
}

const possibleDraws = {
    A: "X",
    B: "Y",
    C: "Z"
}

const getWin = (first, second) => {
    const win = possibleWins[first];
    if (win === second) return "loss";

    const draw = possibleDraws[first];
    if (draw === second) return "draw";

    return "win";
};

let score = 0;
groups.forEach(group => {
    let status = getWin(group[0], group[1]);

    if (status === 'win') score += 6;
    if (status === 'draw') score += 3;

    if (group[1] === 'X') score += 1;
    if (group[1] === 'Y') score += 2;
    if (group[1] === 'Z') score += 3;
});

console.log(score);