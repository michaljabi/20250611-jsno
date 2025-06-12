
// PROVIDER: 
function giveMeTheNumber(mistery, action = 'refund') {

    setTimeout(() => {
        if (action === 'refund') {
            mistery(null, 100)
        } else {
            mistery(new Error('Action not supported'), null);
        }
    }, 3000)

    /*
    if (action === 'refund') {
        mistery(300)
    } else {
        throw new Error('Action not supported')
    }
    */

}



// CONSUMER:
// #1
giveMeTheNumber((err, value) => {
    if (err) {
        return console.log(err.message)
    }
    console.log(value);
    giveMeTheNumber((err, value) => {
        if (err) {
            return console.log(err.message)
        }
        console.log(value);
        giveMeTheNumber((err, value) => {
            if (err) {
                return console.log(err.message)
            }
            console.log(value);
            giveMeTheNumber((err, value) => {
                if (err) {
                    return console.log(err.message)
                }
                console.log(value);
                giveMeTheNumber((err, value) => {
                    if (err) {
                        return console.log(err.message)
                    }
                    console.log(value);
                })
            })
        })
    })
});

// #2 FAIL test:

try {
    giveMeTheNumber((value) => {
        console.log(value);
    }, 'x');
} catch (e) {
    console.log(e.message)
}

// #3 FAIL TEST - working (poprawne rozwiązanie)

giveMeTheNumber((err, value) => {
    if (err) {
        return console.log(err.message)
    }
    console.log(value);
}, 'non-existent');