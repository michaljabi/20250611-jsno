const fruitsCollection = [];


export function addFruit(fruit = '') {
    fruitsCollection.push(fruit);
}

export function hydrateState(initialFruits = []) {
    for (const fruit of initialFruits) {
        fruitsCollection.push(fruit);
    }
}

export function removeFruitByName(name) {
    const index = fruitsCollection.findIndex(f => f === name);
    if (index > -1) {
        fruitsCollection.splice(index, 1);
    }
}

export function getAllFruits() {
    return fruitsCollection;
}

