const readline = require('readline-sync');

const inicio = readline.questionInt("Digite o primeiro número do intervalo: ");
const fim = readline.questionInt("Digite o último número do intervalo: ");

if (inicio >= fim) {
	console.log("\nIntervalo inválido!");
	process.exit(0);
}

console.log(`\nNo Intervalo entre ${inicio} e ${fim}:\n`);

for (let n = inicio; n <= fim; n++) {
	if (n % 3 === 0 && n % 5 === 0) {
		console.log(`${n} é múltiplo de 3 e 5`);
	}
}

