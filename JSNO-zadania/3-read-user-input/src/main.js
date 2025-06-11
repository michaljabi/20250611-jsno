// @ts-check

// start with CommonJS -> przejde do ESM

import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

console.log(`
****************************************
*   WITAJ W GENERATORZE BANNERÓW [?]   *
****************************************    
`)

// const { stdin: input, stdout: output } = require('node:process');

// process.
// let myUser = { name: 'Michał ', age: 20 };

// console.log(myUser)

// const { stdin, stdout } = process;

// const input = stdin;
// const output = stdout;

const rl = createInterface({
    input, // to samo co input: input
    output, //: output
});

rl.question('Podaj zdanie jakie chcesz zamienić w BANNER: ', (answer) => {

    makeBanner(answer);

    rl.close();
});

const BORDER_SPAN = 4;
function makeBanner(sentence = '') {
    const words = sentence.toUpperCase().split(' ');
    for (const word of words) {
        const border = '*'.repeat(word.length + BORDER_SPAN);
        console.log(`${border}\n* ${word} *\n${border}`)
    }
}
