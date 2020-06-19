// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let mascara = rs.question("voce esta usando mascara ao sair de casa ? \n ")

let lavar = rs.question("voce lava as maos frequentemente? \n ")

if ( mascara && lavar == "sim")
 {
     console.log (" VOCÊ ESTÁ DE PARABENS")
 }
else
{
    console.log ("Conhece o MEME do caixão?")
}
