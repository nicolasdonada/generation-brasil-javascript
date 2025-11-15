const readline = require('readline-sync');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const busca = readline.questionInt('Digite o número que você deseja encontrar: ');

const pos = vetor.indexOf(busca);
if (pos !== -1) {
  console.log(`\nO número ${busca} está localizado na posição: ${pos}`);
} else {
  console.log(`\nO número ${busca} não foi encontrado!`);
}
