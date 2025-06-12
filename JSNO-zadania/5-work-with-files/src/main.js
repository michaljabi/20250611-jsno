import path from 'node:path'
import process from 'node:process'

import fs from 'node:fs/promises'

// console.log(import.meta.dirname)

const filePath = path.join(import.meta.dirname, '..', process.env.BASE_DIR, 'data.txt');

console.log(filePath);
try {
    const myFileData = await fs.readFile(filePath, { encoding: 'utf8' });

    console.log(myFileData);

    await fs.writeFile(filePath, '\nsample', { flag: 'a', encoding: 'utf8' })
} catch (e) {
    // console.log(e.code);
    if (e.code === 'ENOENT') {
        console.error('sorry... file not exist...')
    } else {
        console.log(e.message)
    }
}