function validar() {
  const cpf = document.getElementById("cpf");
  const resultado = document.getElementById("resultado");
  // verificar se a caixa esta vazia
  // o comando trim elimina os espaços desnecessários 
  if(cpf.value.trim()== "") {
      return resultado.innerHTML = "Digite o cpf";
  } else if(cpf.value.length < 11) {
    return resultado.innerHTML = "CPF incompleto";
  } else {
    // criar uma variavel para guardar os nove primeiros digitos
    let cpfcalc = cpf.value.substring(0,9);
    let p10 = 10
    let p11 = 11
    let resto = 0
    let rs = 0

 for(let i = 0; i < 9 ; i++){
    rs += cpfcalc[i] * p10 
    p10--;
 }
   resto = rs % 11
   if (resto < 2) {
     cpfcalc += "0"
   } else {
    cpfcalc += ""+ 11 - resto;
   }
   // zerar a variavel rs para um novo calculo 
   rs = 0

   for(let i = 0; i < 10 ; i++){
    rs += cpfcalc[i] * p11 
    p11--;
 }
   resto = rs % 11
   if (resto < 2) {
     cpfcalc += "0"
   } else {
    cpfcalc += ""+ 11 - resto;
   }

  if(cpf.value == cpfcalc) {
    resultado.innerHTML = "CPF válido"
  } else {
    resultado.innerHTML = "CPF inválido"
  }

   
  }
}