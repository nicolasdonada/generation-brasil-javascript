import readlinesync = require("readline-sync");

let numeros: Set<number> = new Set<number>([1,2,3,4,5,6,7,8,9,10]);

let valorProcurar = readlinesync.questionInt("Digite um valor para procurar no Array: ");

if(numeros.has(valorProcurar)){
    console.log(`Valor ${valorProcurar} foi encontrado!`);
} else {
    console.log(`Valor ${valorProcurar} não foi encontrado!`);
}

