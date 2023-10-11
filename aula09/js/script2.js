let x = 40;
const primeiro = new Promise(function(resolve, reject){
    if(x > 20){
        resolve("Está funcionado")
    } else {
        reject("Deu erro")
    }

});
const body = document.body;
const btn = document.createElement("button");
btn.innerHTML = "Clique";
btn.onclick = ()=>{
  primeiro.then((rs)=> console.log(rs)).catch((erro)=> console.log(erro));
};
body.appendChild(btn);

// separação 

let user = "";
let pass = "";
function logar(){
    return new Promise((resolve,reject)=> {
      if( user == "Admin" & pass == "123") {
        resolve(
            {
              nome: "Adiministrador",
              user: "admin",
              email: "admin@adiministrador.com"
            }
            )
      }
      else {
        reject({
            erro_numero:"4141",
            erro_msg: "Usuario ou senha inválido"
        })
      }
    })
}

const btn2 = document.createElement("button")
btn2.innerHTML = "Logar no Sistema";

btn2.onclick =()=> {
    user = prompt("Digite o nome de usuário");
    pass = prompt("Digite sua senha");

    logar()
    .then((rs)=> console.log(rs))
    .catch((erro)=> console.log(erro));
}


body.appendChild(btn2);