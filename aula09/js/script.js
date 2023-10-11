let n = 0;
    function msg() {
    console.log(`Contei: ${n}`);
    n++;
        }

//window.setInterval(msg,1000);
//window.setTimeout(msg,5000);
// window.setInterval(function(){
//    console.log(`Agora n vale: ${n}`);
//     n++;
// },1000);


//   window.setInterval(() => {
//    console.log(`O valor de n é ${n}`);
//    n++;
//   });

const cidades = [ "Leme", "Guarulhos","Itu", "Campinas" , "Rio"];

//console.log(cidades[1].toUpperCase());

let p = 1;
function saida(nome_cidade){
 console.log(`${p} - ${nome_cidade.toUpperCase()} `)
 p++;
}
//cidades.forEach(saida);

cidades.forEach((nome_cidade)=> {
    console.log(`${p} - ${nome_cidade.toUpperCase()} `)
 p++;
})