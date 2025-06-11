import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const rl = createInterface({ input, output });

export async function getText() {

    return rl.question('Podaj zdanie jakie chcesz zamienić w banner:\n');
}

export function close() {
    rl.close();
}