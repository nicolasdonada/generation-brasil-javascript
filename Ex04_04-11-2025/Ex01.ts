import readlinesync = require("readline-sync");

let cores: Array<string> = new Array<string>;

for(let i = 0; i < 5; i++){
    cores.push(readlinesync.question(`Digite a cor ${i}: `));
}

console.log("\nCores: ");
console.log(cores);
console.log("\nCores ordenadas alfabéticamente: ");
console.log(cores.sort());