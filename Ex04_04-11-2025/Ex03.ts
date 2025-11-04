import readlinesync = require("readline-sync");

let numeros: Set<number> = new Set<number>;

for(let i = 0; i < 10; i++){
    let valorInserir: number;
    valorInserir = readlinesync.questionInt(`Digite o ${i} valor: `);
    
    while(numeros.has(valorInserir)){
        valorInserir = readlinesync.questionInt(`Valor já existe. Digite o ${i} valor: `);
    }

    numeros.add(valorInserir);
}

for(const num of numeros){
    console.log(num);
}