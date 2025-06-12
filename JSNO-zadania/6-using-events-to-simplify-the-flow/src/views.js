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

programEventBus.on('onPathSegmentsRequested', path => {
    const segments = path.split('/');
    console.log(`- Liczba segmentów ${segments.length}
- Segmenty: [${segments}]`)
    programEventBus.emit('onLoad')
})