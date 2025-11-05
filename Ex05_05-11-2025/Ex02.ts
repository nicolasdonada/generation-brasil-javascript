import { Stack } from "./Stack";
import readlinesync = require("readline-sync");


let pilha = new Stack();

console.log(`
Menu:
****************************************
*  1 - Adicionar Livro na pilha        *
*  2 - Listar todos os Livros          *
*  3 - Retirar Livro da pilha          *
*  0 - Sair                            *
****************************************
`);

while (true) {

    let opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    if(opcao == 1){
        let nomeLivro = readlinesync.question("Digite o nome do livro: ");

        pilha.push(nomeLivro);

        console.log("Livro adicionado!");
    } else if (opcao == 2) {
        pilha.printStack(); 
    } else if(opcao == 3){
        console.log("Um livro foi retirado da pilha!");
        pilha.pop();
    } else if(opcao == 0){
        console.log("Programa finalizado!");
        break;
    } else {
        console.log("Opção inválida!");
    }

}