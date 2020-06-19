// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let numVoo = rs.question("Qual o numero do seu voo? \n")

let fileira = rs.question("Em qual fileira voce deseja sentar ? \n")

console.log("Cartão de embarque para voo numero : "+numVoo)

console.log("você sentará na fileira : "+fileira) 