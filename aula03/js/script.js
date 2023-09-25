// Criar as variaveis para fazer referencia aos controles html

var txtnome = document.getElementById("txtnome");
var txtsalario = document.getElementById("txtsalario");
var txtinss = document.getElementById("txtinss");
var txtconvenio = document.getElementById("txtconvenio");
var txtnfilhos= document.getElementById("txtnfilhos");
var txtliquido = document.getElementById("txtliquido");
var btncalcular = document.getElementById("btncalcular");
var texto = document.getElementById("texto");

txtsalario.onclick = function (){
    texto.innerHTML = "Digite apenas o valor do Salário sem R$"
};

txtinss.onclick = function () {
    var inss = "de R$ 0,00 até R$ 1320,00 -> 7,5% <br>"
    inss += "de R$ 1.320,01 até R$ 2.571,29 -> 9% <br>"
    inss += "de R$ 2.571,30 até R$ 3.856,94 -> 12% <br>"
    inss += "de 3.856,95 até R$ 7.507,49 -> 14% <br>  "
    texto.innerHTML = inss
};

txtconvenio.onclick = function () {
    texto.innerHTML = "Salários de até 2.500,00 o desconto é de 5%; caso contrário o desconto será de 7,5%"
};

txtnfilhos.onclick = function() {
    texto.innerHTML = "Se o funcionário não tiver filhos então não receberá; caso contrário receberá 5% do salário por filho"
};

btncalcular.onclick = function () {
    var rsinss
    var rsconvenio
    var rsfilho
    var rsliquido 

      
    // o value aqui é pra informar que eu quero valor que foi colocado dentro da caixa (variavel)
    if (txtsalario.value <= 1320) {
        rsinss = txtsalario.value * 7.5/100
    } else if (txtsalario.value <=  2.571,29)
    rsinss = txtsalario.value * 9/100 
    else if (txtsalario.value <=  3.856,94) {
        rsinss = txtsalario.value * 12/100
    } else if (txtsalario.value <= 7.507,49 ) {
        rsinss = txtsalario.value  * 14/100
    } else {
        rsinss = 7.507,49 * 14/100
    }

    if(txtconvenio.value <= 2500) {
        rsconvenio = txtsalario.value * 5/100
    } else {
        rsconvenio = txtsalario.value * 7.5/100
    }

    txtliquido.value = inss 
};