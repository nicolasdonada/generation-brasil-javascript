const readline = require('readline-sync');

console.log('Preencha a matriz 3x3 (linha por linha):');

const matriz = [];
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = readline.questionInt(`Elemento [${i + 1},${j + 1}]: `);
  }
}

const diagonalPrincipal = [];
const diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
  diagonalPrincipal.push(matriz[i][i]);
  somaPrincipal += matriz[i][i];

  diagonalSecundaria.push(matriz[i][2 - i]);
  somaSecundaria += matriz[i][2 - i];
}

console.log('\nElementos da Diagonal Principal:');
console.log(diagonalPrincipal.join(' '));

console.log('\nElementos da Diagonal Secundária:');
console.log(diagonalSecundaria.join(' '));

console.log('\nSoma dos Elementos da Diagonal Principal:');
console.log(somaPrincipal);

console.log('\nSoma dos Elementos da Diagonal Secundária:');
console.log(somaSecundaria);
