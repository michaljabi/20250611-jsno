import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { makeBanner } from './banner.js'

import './program-title.js'


const rl = createInterface({ input, output });

function mainProgram() {

    rl.question('Podaj zdanie jakie chcesz zamienić w banner:\n', (answer) => {

        makeBanner(answer);
        whatNext();
    });
}


function whatNext() {
    rl.question(`Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner\n`, (answer2) => {

        if (answer2 === 'k') {
            console.log('Kończę działanie, żegnam...')
            rl.close();
        } else if (answer2 === 'n') {
            mainProgram();
        } else {
            whatNext()
        }

    })
}

mainProgram();