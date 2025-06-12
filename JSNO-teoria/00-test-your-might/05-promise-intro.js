
console.log('Hello stranger... shall we start?')

function giveMeTheNumber() {
    return Promise.resolve(300)
}


setTimeout(async () => {
    const value = await giveMeTheNumber()
    console.log(value);
}, 3000)


setTimeout(() => {
    giveMeTheNumber().then((value) => {
        console.log(value)
    })
}, 3000)

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
giveMeTheNumber()
    .then(function (value) {
        console.log(value)
    })


// Rozwiązanie 2: (async / await), używam i wyprowadzam IIFE bo JS REPL nie ogarnia....

let myVal = 0;

async function run() {
    const value = await giveMeTheNumber()
    console.log(value);
    console.log(typeof value);
    console.log(typeof []);
    console.log(typeof (() => { }));
    //
    console.log(typeof true);
    console.log(typeof undefined);
    // BUG in JS:
    console.log(typeof null)
    myVal = value

    return value
}
run().then((va) => {
    console.log(va)
});

; (async () => {
    const value = await run()
    console.log(value);
})();

console.log(myVal);

setTimeout(() => {
    console.log(myVal);
})

    // IIFE
    // https://developer.mozilla.org/en-US/docs/Glossary/IIFE 
    ; (async () => {
        console.log('!')
        const value = await giveMeTheNumber()
        console.log(value);
    })();


// function declaration:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#difference_between_function_constructor_and_function_declaration
function myDeclaration() {

}