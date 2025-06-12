function showNumber() {
    return 80;
}

const myNum = showNumber();
console.log(myNum);

function showNumber2() {
    // PROVIDER:
    return Promise.resolve(80);
}

const myNum2 = showNumber2();
console.log(myNum2);

function showNumber21() {

    // PROVIDER:
    return new Promise((resolve) => {
        resolve(80)
    });
}

const myNum21 = showNumber21();
console.log(myNum21);

// PROVIDER:
async function showNumber3() {
    return 80;
}

const myNum3 = showNumber3();
console.log(myNum3);


// const result = await Promise.resolve(20);
// console.log(result);