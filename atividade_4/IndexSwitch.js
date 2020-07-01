// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let dia = rs.questionInt("Que dia voce nasceu ? \n")

let mes = rs.questionInt("Que mes voce nasceu ? \n")

if (dia > 31 ) 
    console.log ("por favor digite um numero valido \n")
if (dia < 1 )
    console.log ("por favor digite um numero valido \n")
else if ( mes > 12) 
    console.log("por favor digite um mes valido \n")
else if (mes < 1) 
    console.log("por favor digite um mes valido \n")

else { 
  switch (mes) {
    case 1:
        dia >= 21 ? console.log("aquario") : console.log("capricornio")
        break
    case 2:
        dia >= 19 ? console.log("Peixes") : console.log("aquario")
        break
    case 3:
        dia >= 21 ? console.log("Aries") : console.log("peixes")
        break
    case 4:
        dia >= 21 ? console.log("Touro") : console.log("Aries")
        break
    case 5:
        dia >= 21 ? console.log ("gemeos") : console.log("touro")
        break
    case 6:
        dia >= 21 ? console.log ("Cancer") : console.log ("gemeos")
        break
    case 7:
        dia >= 23 ? console.log ("Leão") : console.log ("cancer")
        break
    case 8: 
        dia >= 23 ? console.log ("Virgem") : console.log ("leão")
        break
    case 9:
        dia >= 23 ? console.log ("libra") : console.log ("Virgem")
        break
    case 10:
        dia >= 23 ? console.log ("Escorpião") : console.log ("Libra")
        break
    case 11:
        dia >= 22 ? console.log ("Sargitário") : console.log ("escorpião")
        break
    case 12:
        dia >= 22 ? console.log("Carpricórnio") : console.log ("Sargitário")
        break
    
        default:
            console.log ("preecnha uma data valida")
     }

}  




//Escorpião: de 23 outubro a 21 novembro
//Sagitário: de 22 novembro a 21 dezembro
//Capricórnio: de 22 dezembro a 20 janeiro
//Aquário: de 21 janeiro a 18 fevereiro
//Peixes: de 19 fevereiro a 20 março