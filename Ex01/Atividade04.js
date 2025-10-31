import readline from 'readline-sync'

let valor1;
let valor2;
let valor3;
let valor4;


valor1 = readline.questionFloat("Digite valor 1: ");
valor2 = readline.questionFloat("Digite valor 2: ");
valor3 = readline.questionFloat("Digite valor 3: ");
valor4 = readline.questionFloat("Digite valor 4: ");



console.log(`Diferenca dos valores: ${(valor1 * valor2) - (valor3 * valor4)}`);