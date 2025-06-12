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

//
programEventBus.on('onLoad', async () => {
    const aswer = await rl.question('Podaj ścieżkę: ')
})

programEventBus.emit('onStart')