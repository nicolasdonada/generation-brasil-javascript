const readline = require('readline-sync');

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
	const numero = readline.questionInt(`Digite o ${i}º número: `);
	if (numero % 2 === 0) {
		pares++;
	} else {
		impares++;
	}
}

console.log(`\nTotal de números pares: ${pares}\n\nTotal de números ímpares: ${impares}`);

