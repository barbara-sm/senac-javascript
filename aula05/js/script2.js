const numeros = [12,17,19,21];
console.log(numeros);
numeros.push(50);
console.log(numeros);
numeros.unshift(220);
console.log(numeros);
console.log("----- Números adicionados pelo usuario --------")

/* var valores = prompt("Digites números separados por vírgula(,) ");
console.log("Isso é uma string " +valores);

// o split pega uma string e analisa o separador de caracteres e assim dividir em um array.
const array_valores = valores.split(",");
console.log(array_valores);

console.log(typeof(valores));
console.log(typeof(array_valores)); */


const lista_produtos = [
    ["Código", "Nome", "Preço"],
    ["51", "Mousse", "R$ 50,20"],
    ["52", "Teclado", "R$ 150,20"],
]

console.log(lista_produtos);
console.log(lista_produtos[1][1]);

lista_produtos.push(["53", "SDD" , "R$ 250"]);
console.log(lista_produtos);
var novo_produto = prompt("Adicione o codigo, nome do produto, preço separador por ; ").split(";")
lista_produtos.push(novo_produto)
console.log(lista_produtos);