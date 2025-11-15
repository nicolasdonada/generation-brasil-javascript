
const readline = require('readline-sync');

let menores = 0;
let maiores = 0;

while (true) {
	const idade = readline.questionInt('Digite uma idade: ');
	if (idade < 0) {
		break;
	}

	if (idade < 21) {
		menores++;
	}

	if (idade > 50) {
		maiores++;
	}
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menores}\n\nTotal de pessoas maiores de 50 anos: ${maiores}`);

