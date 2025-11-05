import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

let fila = new Queue();

console.log("Menu:");
console.log("****************************************");
console.log("*                                      *");
console.log("*  1 - Adicionar Cliente na Fila       *");
console.log("*  2 - Listar todos os Clientes        *");
console.log("*  3 - Retirar Cliente da Fila         *");
console.log("*  0 - Sair                            *");
console.log("*                                      *");
console.log("****************************************");

while (true) {

    let opcao = readlinesync.questionInt("Entre com a opcaoo desejada: ");

    if(opcao == 1){
        let nomeCliente = readlinesync.question("Digite o nome do cliente: ");

        fila.enqueue(nomeCliente);

        console.log("Cliente adicionado!")
    } else if (opcao == 2) {
        fila.printQueue(); 
    } else if(opcao == 3){
        fila.dequeue();
    } else if(opcao == 0){
        console.log("Programa finalizado!");
        break;
    } else {
        console.log("Opção inválida!");
    }

}