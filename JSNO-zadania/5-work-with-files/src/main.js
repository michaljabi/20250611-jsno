import path from 'node:path'
import { env, stdin as input, stdout as output } from 'node:process'
import fs from 'node:fs/promises'
import { createInterface } from 'readline/promises'

const rl = createInterface({ input, output });

const filePath = path.join(import.meta.dirname, '..', env.BASE_DIR, 'data.txt');

console.log(filePath);
try {
    const myFileData = await fs.readFile(filePath, { encoding: 'utf8' });

    console.log('Hej, zawartość pliku to:\n', myFileData);

} catch (e) {
    // console.log(e.code);
    if (e.code === 'ENOENT') {
        // console.error('sorry... file not exist...')
        console.log('Plik nie istnieje...');
    } else {
        console.log(e.message)
    }
}

const answer = await rl.question('Czy chcesz coś dopisać do pliku? (y/N)');

if (answer === 'y') {
    const data = await rl.question('Dane do dopisania: ');
    try {
        await fs.writeFile(filePath, `\n${data}`, { flag: 'a', encoding: 'utf8' })
    } catch (e) {
        console.log(e.message)
    } finally {
        rl.close();
    }
}

