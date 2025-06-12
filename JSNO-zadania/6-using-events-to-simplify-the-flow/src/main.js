import { stdin as input, stdout as output } from 'node:process'
import { createInterface } from 'node:readline/promises'

import { programEventBus } from "./program-events.js";

import './views.js'


const rl = createInterface({ input, output });

programEventBus.on('onLoad', async () => {
    const answer = await rl.question('Podaj ścieżkę: ')
    if (answer === 'koniec') {
        rl.close();
        return programEventBus.emit('onClose')
    }
    programEventBus.emit('onPathSegmentsRequested', answer)
})


programEventBus.emit('onStart')