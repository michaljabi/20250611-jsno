import EventEmmiter from 'node:events'

export const programEventBus = new EventEmmiter();

// Symulacja ładowania 3 sec...
setTimeout(() => {
    programEventBus.emit('onLoad')
}, 3000)
