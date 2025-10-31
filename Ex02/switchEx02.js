import readline from 'readline-sync'

let nome = readline.question("Digite seu nome: ");
let codigoCargo = readline.questionInt("Digite seu codigo do cargo: ");
let cargo;
let salario = readline.questionFloat("Digite seu salario: ");

switch (codigoCargo) {
    case 1:
        salario += salario * 0.10;
        cargo = "Gerente";
        break;
    case 2:
        salario += salario * 0.07;
        cargo = "Vendedor";
        break;
    case 3:
        salario += salario * 0.09; 
        cargo = "Supervisor";
        break;
    case 4:
        salario += salario * 0.06;
        cargo = "Motorista";
        break;
    case 5:
        salario += salario * 0.05;
        cargo = "Estoquista";
        break;
    case 6:
        salario += salario * 0.08;
        cargo = "Técnico de TI";
        break;
    default:
        console.log("Opção inválida!");
        break;
}

console.log(`\nNome colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$${salario} `)


