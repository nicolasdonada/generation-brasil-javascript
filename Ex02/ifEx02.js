import readline from 'readline-sync'

let valor1 = readline.questionInt("Digite valor 1: ");

if(valor1 % 2 == 0 && valor1 >= 0){
    console.log(`O numero ${valor1} e par e positivo`);
} else if(valor1 % 2 == 0 && valor1 < 0){
    console.log(`O numero ${valor1} e par e negativo`);
} else if(valor1 % 2 != 0 && valor1 >= 0){
    console.log(`O numero ${valor1} e impar e positivo`);   
} else if(valor1 % 2 != 0 && valor1 < 0){
    console.log(`O numero ${valor1} e impar e negativo`);   
}