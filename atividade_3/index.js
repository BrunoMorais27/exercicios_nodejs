// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let numQuad = rs.questionFloat("Qual o tamanho dos lados do quadrado? \n ")

let resp = numQuad * 4 
{ 
    console.log ("o tamanho do seu quadrado é" + resp ) 
}
