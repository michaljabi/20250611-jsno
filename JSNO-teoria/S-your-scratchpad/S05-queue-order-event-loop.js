Promise.resolve().then(() => {
    console.log('Drugi')
})
// task
setTimeout(() => {
    console.log('Pierwszy')
})

// microtask
Promise.resolve().then(() => {
    console.log('Drugi')
})

// normal execution
console.log('Trzeci')

Promise.resolve().then(() => {
    console.log('Drugi')
})