import readline from 'readline-sync'

let numero1 = readline.questionFloat("Digite um valor: ");
let numero2 = readline.questionFloat("Digite um valor: ");

console.log("\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")

let opcao = readline.questionInt("Digite a opcao: ");

switch (opcao) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    
    case 3:
        console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
        break;

    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log("Opção inválida!");
        break;
}
