import { makeBanner } from '../banner.js';
import { getText, close } from './get-text.js'

async function main() {

    const answer = await getText();

    makeBanner(answer);

    const answer2 = await getText();

    makeBanner(answer2);

    close();
}


main()