import readline from 'readline-sync'

let opcao = readline.questionInt("Digite a opcao: ");
let quantidadeProduto;

switch (opcao) {
    case 1:
        quantidadeProduto = readline.questionInt("Digite a quantidade do produto Cachorro Quente: ");

        console.log(`\nProduto: Cachorro Quente\nValor total: R$${quantidadeProduto * 10.00}`);
        break;

    case 2:
        quantidadeProduto = readline.questionInt("Digite a quantidade do produto X Salada: ");

        console.log(`\nProduto: X Salada\nValor total: R$${quantidadeProduto * 15.00}`);
        break;
    case 3:
        quantidadeProduto = readline.questionInt("Digite a quantidade do produto X Bacon: ");

        console.log(`\nProduto: X Bacon\nValor total: R$${quantidadeProduto * 18.00}`);
        break;
    case 4:
        quantidadeProduto = readline.questionInt("Digite a quantidade do produto Bauru: ");

        console.log(`\nProduto: Bauru\nValor total: R$${quantidadeProduto * 12.00}`);
        break;
    case 5:
        quantidadeProduto = readline.questionInt("Digite a quantidade do produto Refrigerante: ");

        console.log(`\nProduto: Refrigerante\nValor total: R$${quantidadeProduto * 8.00}`);
        break;
    case 6:
        quantidadeProduto = readline.questionInt("Digite a quantidade do produto Suco de Laranja: ");

        console.log(`\nProduto: Suco de Laranja\nValor total: R$${quantidadeProduto * 13.00}`);
        break;
    default:
        console.log("Opcao inválida!");
        break;
}