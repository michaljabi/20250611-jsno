const EventEmitter = require("events");


const eventBus = new EventEmitter();


// CONSUMER
eventBus.on('onStart', () => {
    console.log('Witaj w moim programie');
})

// CONSUMER #2
eventBus.on('onStart', () => {
    //.. logowanie danch...
    // write(.... new Date())
})


eventBus.on('my-data', (data) => {
    console.log(data);
})
eventBus.on('my-data', (data) => {
    console.log(data);
})


// PROVIDER:
eventBus.emit('my-data', 'HELLO');
eventBus.emit('my-data', 'HELLO2');
eventBus.emit('onStart');