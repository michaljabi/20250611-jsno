import { stdin as input, stdout as output } from 'node:process'
import { createInterface } from 'node:readline/promises'

import { programEventBus } from "./program-events.js";


programEventBus.on('onStart', () => {
    console.log(`[Path Segments 1.0]
Proszę czekać, ładowanie danych...`)
})

programEventBus.on('onLoad', () => {
    console.log(`----
Witaj.
Obsługa programu: 
  1. podaj ścieżkę
  lub
  2. wpisz: koniec - aby zakończyć działanie programu`)
})

programEventBus.on('onClose', () => {
    console.log(`---
Żegnaj.`)
});

const rl = createInterface({ input, output });

programEventBus.on('onLoad', async () => {
    const answer = await rl.question('Podaj ścieżkę: ')
    if (answer === 'koniec') {
        rl.close();
        return programEventBus.emit('onClose')
    }
    programEventBus.emit('onPathSegmentsRequested', answer)
})

programEventBus.on('onPathSegmentsRequested', path => {
    const segments = path.split('/');
    console.log(`- Liczba segmentów ${segments.length}
- Segmenty: [${segments}]`)
    programEventBus.emit('onLoad')
})


programEventBus.emit('onStart')