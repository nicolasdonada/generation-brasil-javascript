import readline from 'readline-sync'

let nota1;
let nota2;
let nota3;
let nota4;


nota1 = readline.questionFloat("Digite nota 1: ");
nota2 = readline.questionFloat("Digite nota 2: ");
nota3 = readline.questionFloat("Digite nota 3: ");
nota4 = readline.questionFloat("Digite nota 4: ");



console.log(`Media das notas: ${(nota1 + nota2 + nota3 + nota4) / 4}`);