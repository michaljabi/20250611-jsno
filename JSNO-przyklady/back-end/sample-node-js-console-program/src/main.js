import {createInterface} from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const readInput = createInterface({ input, output});

console.log(`

		WITAJ w programie do obliczania długości boku "c" w trójkącie pitagorejskim.
		----------------------------------------------------------------------------
`)

async function runProgram() {
	const a = await readInput.question('Podaj długość boku a=');
	const b = await readInput.question('Podaj długość boku b=');
	const result = Math.sqrt(a**2 + b**2);

	console.log(`Bok c=${result}`);
}

runProgram().then(() => readInput.close());

