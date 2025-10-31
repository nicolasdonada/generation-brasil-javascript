import readline from 'readline-sync'

let salario;
let abonoSalario;

salario = readline.questionFloat("Digite seu salario: ");
abonoSalario = readline.questionFloat("Digite seu abono salarial: ");

console.log(`Novo salario: ${salario + abonoSalario}`);