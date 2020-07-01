// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let dia = rs.question("Que dia voce nasceu ? \n")

let mes = rs.question("Que mes voce nasceu ? \n")

if ( dia >= 20 && mes == 1 || dia <= 18 && mes ==2) {
    console.log ("Aquario")
}
if ( dia >= 19 && mes == 2 || dia <= 20 && mes ==3) {
    console.log ("Peixes")
}
if ( dia >= 20 && mes == 3 || dia <= 20 && mes ==4) [
    console.log ("Aries")
]
if (dia >= 20 && mes == 4 || dia <= 20 && mes == 5) {
    console.log ("Touro")
}
if ( dia >=20 && mes == 5 || dia <= 20 && mes == 6) {
    console.log ("Gemeos")
}
if ( dia >=20 && mes ==6 || dia <= 22 && mes == 7) {
    console.log ("Cancer")
}
if ( dia >=23 && mes ==7 || dia <= 22 && mes == 8) {
    console.log ("Leao")
}
if (dia >=23 && mes ==8 || dia <= 22 && mes == 9) {
    console.log ("Virgem")
}
if (dia >=23 && mes ==9 || dia <= 22 && mes == 10) {
    console.log ("Libra")
}
if (dia >=23 && mes ==10 || dia <= 21 && mes == 11) {
    console.log ("Escorpião")
}
if (dia >=22 && mes == 11 || dia <=21 && mes == 12) {
    console.log ("Sargitário")
}
if (dia >=22 && mes == 12 || dia <= 20 && mes == 1) {
    console.log ("Capricórnio")
}
