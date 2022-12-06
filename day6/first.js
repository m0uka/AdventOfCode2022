const fs = require('fs');
const inputStr = fs.readFileSync('input.txt', 'utf8');
const input = inputStr.split('');

let bufferIndices = [];
for (let i = 0; i < input.length; i++) {
    const l = input[i];
    for (let j = 0; j <= i; j++) {
        if (!bufferIndices[j]) {
            bufferIndices[j] = '';
        }
        if (bufferIndices[j].length === 4) continue;
        bufferIndices[j] += l;
    }
};

for (let i = 0; i < bufferIndices.length; i++) {
    const buffer = bufferIndices[i];
    const arr = buffer.split('');
    const unique = new Set(arr).size === arr.length;

    if (unique) {
        console.log(buffer);
        console.log(inputStr.indexOf(buffer) + 4);
        break;
    }
};