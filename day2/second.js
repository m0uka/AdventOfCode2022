const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const groups = input.split('\r\n').map(x => x.split(' '));

const possibleWins = {
    A: "Z", // rock -> scissors
    B: "X", // paper -> rock
    C: "Y"  // scissors -> paper
}

const possibleDraws = {
    A: "X", // rock -> rock
    B: "Y", // paper -> paper
    C: "Z"  // scissors -> scissors
}

const possibleLosses = {
    A: "Y", // rock -> paper
    B: "Z", // paper -> scissors
    C: "X"  // scissors -> paper
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
    const opponent = group[0];
    const desired = group[1];

    let second = desired === 'X' ? possibleWins[opponent] : desired === 'Y' ? possibleDraws[opponent] : possibleLosses[opponent]
    let status = getWin(opponent, second);

    if (status === 'win') score += 6;
    if (status === 'draw') score += 3;

    if (second === 'X') score += 1;
    if (second === 'Y') score += 2;
    if (second === 'Z') score += 3;
});

console.log(score);