import   {potencia, menor,qtdLetras as qt, pontoPorVirgula, arrayReverso, frequenciaNumero}   from "./biblioteca.js";
const n = [1,23,5,0,12,45];
console.log(potencia(2,4));
console.log(menor(n));
console.log(qt("Hoje é segunda feira"));
console.log(pontoPorVirgula("12.356.975.33"));
console.log(n);
console.log(arrayReverso(n));

const n2 = [2, 3, 10, 10, 2, 10, 10, 2, 4, 3,2,2];
const numeroMaisRepetido = frequenciaNumero(n2);
console.log("O número mais repetido é:", numeroMaisRepetido);