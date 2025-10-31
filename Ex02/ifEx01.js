import readline from 'readline-sync'

let valor1 = readline.questionInt("Digite valor 1: ");
let valor2 = readline.questionInt("Digite valor 2: ");
let valor3 = readline.questionInt("Digite valor 3: ");

if ((valor1 + valor2) > valor3) {
    console.log(`A soma de ${valor1} + ${valor2} e maior que ${valor3}`);
} else if((valor1 + valor2) < valor3){
    console.log(`A soma de ${valor1} + ${valor2} e menor que ${valor3}`);
} else {
    console.log(`A soma de ${valor1} + ${valor2} e igual a ${valor3}`);
}

