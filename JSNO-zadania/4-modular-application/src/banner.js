const BORDER_SPAN = 4;

export function makeBanner(sentence = '') {
    const words = sentence.toUpperCase().split(' ');
    for (const word of words) {
        const border = '*'.repeat(word.length + BORDER_SPAN);
        console.log(`${border}\n* ${word} *\n${border}`)
    }
}