console.log(`
****************************************
*   WITAJ W GENERATORZE BANNERÓW [!]   *
****************************************    
`)

// start with CommonJS -> przejde do ESM

const readline = require('node:readline');
const process = require('node:process');
// const { stdin: input, stdout: output } = require('node:process');

// process.
// let myUser = { name: 'Michał ', age: 20 };

// console.log(myUser)

const { stdin, stdout } = process;

const input = stdin;
const output = stdout;

const rl = readline.createInterface({
    input, // to samo co input: input
    output, //: output
});

rl.question('Podaj zdanie jakie chcesz zamienić w banner: ', (answer) => {

    const words = answer.toUpperCase().split(' ');
    for(const word of words) {
        console.log('*'.repeat(word.length + 4))
        console.log(`* ${word} *`);
        console.log('*'.repeat(word.length + 4))
    }

    rl.close();
});