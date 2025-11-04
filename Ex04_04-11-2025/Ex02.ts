import readlinesync = require("readline-sync");

let numeros: Array<number> = new Array<number>(1,2,3,4,5,6,7,8,9,10);

let valorProcurar = readlinesync.questionInt("Digite um valor para ser procurado: ");

if (numeros.indexOf(valorProcurar)) {
    console.log(`Valor ${valorProcurar} encontrado na posição ${numeros.indexOf(valorProcurar)+1} do Array.`);
} else {
    console.log(`Valor ${valorProcurar} não encontrado no Array.`);
}