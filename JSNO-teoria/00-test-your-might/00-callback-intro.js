
// @ts-check

console.log('Hello stranger... shall we start?')


// PROVIDER: 

function giveMeTheNumber(mistery) {
    // mistery(300)
    setTimeout(() => {
        mistery(1300)
    }, 3000)

    mistery(300)
    mistery(300)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */

// CONSUMER:

// #1
giveMeTheNumber((value) => {
    console.log(value);
});


// #2
giveMeTheNumber((value) => {
    console.log(value);
});

// #n...


setTimeout(() => {
    console.log('!')
}, 8000)