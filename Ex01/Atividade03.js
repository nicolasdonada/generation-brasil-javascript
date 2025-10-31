import readline from 'readline-sync'

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;


salarioBruto = readline.questionFloat("Digite o salario bruto: ");
adicionalNoturno = readline.questionFloat("Digite o adicional noturno: ");
horasExtras = readline.questionFloat("Digite horas extras: ");
descontos = readline.questionFloat("Digite o desconto: ");



console.log(`Salario liquido: ${salarioBruto + adicionalNoturno  + (horasExtras * 5) - descontos}`);