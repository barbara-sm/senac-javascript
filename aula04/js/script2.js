
//Vamos fazer uma referencia a classe date
let tempo = new Date()
console.log(tempo.getDay())
console.log(tempo.getDate())
console.log(tempo.getMonth())

switch(tempo.getDay()) {
    case 0:
    console.log("Domingo")
    break;
    case 1:
    console.log("Segunda-feira")
     break;
    case 2:
     console.log("Terça-feira")
     break;
    case 3:
    console.log("Quarta-feira")
    break;
    case 4:
    console.log("Quinta-feira")
    break;
    case 5:
    console.log("Sexta-feira")
    default:
    console.log("Sábado")
    break;
};