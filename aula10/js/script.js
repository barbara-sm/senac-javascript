const url_filmes = "https://api.themoviedb.org/3/movie/popular?api_key=1eaaec06df7e280afc974183801dc23a";
const url_img = "https://image.tmdb.org/t/p/w500"

// fazer referencia ao corpo da página
const body = document.body;

body.onload = ()=> {
    carregarFilmes();
};

function carregarFilmes() {
   const h1 = document.createElement("h1");
   h1.innerHTML = "Lista de Filmes";
   const header = document.createElement("header");
   const main = document.createElement("main");
   const footer = document.createElement("footer");
   header.appendChild(h1)


//adicionar as areas header,main, footer no body 
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);


//realizar a chamada da api e tratar os dados que retornam 
// utilizaremos o comando fetch(buscar) e, este comando é uma promesi. Sendo assim ele tem 2 elementos de retorno.
// 1- Resolve : then e o 2_ Reject -> catch
// quando da tudo certo retorna o resolve e quando da erro retorna o reject

fetch(url_filmes).then((response)=>response.json()).
then((saida)=>{
    console.log(saida.results);
    saida.results.map((item)=>{
      let divFilme = document.createElement("div");
      divFilme.setAttribute("class","divFilme");

      let imgFilme = document.createElement("img");
      imgFilme.src = `${url_img}${item.poster_path}`;
      imgFilme.setAttribute("class","imgFilme");

      let tituloFilme = document.createElement("h2");
      tituloFilme.innerHTML = item.title;

      let lacamento = document.createElement("h4");
      lacamento.innerHTML = item.release_date;

      divFilme.appendChild(imgFilme);
      divFilme.appendChild(tituloFilme);
      divFilme.appendChild(lacamento);
      main.appendChild(divFilme);

      divFilme.onclick = ()=> {
        detalheFilme();
      }


    });
})
.catch((erro)=> console.error(`Erro ao carregar a api ${erro}`))
};

function detalheFilme() {
    const detalhe_filme = "https://api.themoviedb.org/3/movie/575264?api_key=1eaaec06df7e280afc974183801dc23a&language=pt-BR";

    let divSombra = document.createElement("div")
    divSombra.style.width="100vw";
    divSombra.style.height="100vh";
    divSombra.style.position="fixed";
    divSombra.style.zIndex= "10000";
    divSombra.style.backgroundColor="rgba(0,0,0,0.9)";
    divSombra.style.top="0px";
    divSombra.style.left="0px";
    divSombra.style.display="flex";
    divSombra.style.justifyContent="center";
    divSombra.style.alignItems="center";

    let divBranca = document.createElement("div")
    divBranca.style.width="100vw";
    divBranca.style.height="60vh";
    divBranca.style.backgroundColor="white";


    divSombra.appendChild(divBranca);
    body.appendChild(divSombra);
}

