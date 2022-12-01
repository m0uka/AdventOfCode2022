const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const groups = input.split(/\n\s*\n/);
const items = groups.map(x => x.split(/\r?\n|\r|\n/g).map(y => Number(y)).reduce((sum, a) => sum + a, 0));
console.log(Math.max(...items))