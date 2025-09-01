var fundo;
var navbar;
var coluna;
var estado = 0;
var estado2 = 0
var estado3= 0;
function trocarTema(){
    // fundodosite
    fundo = document.getElementById("body");
    if(estado == 0){
        body.classList.remove("fundosite");
        body.classList.add("escurotema");
        estado = 1;
    }else{
        body.classList.remove("escurotema");
        body.classList.add("fundosite");
        estado = 0;
    }

    // fundo da navbar
    navbar = document.getElementById("barra");
    if(estado2==0){
        navbar.classList.remove("navbar-fundo");
        navbar.classList.add("navbar-escuro");
        estado2 = 1;
    }else{
        navbar.classList.remove("navbar-escuro");
        navbar.classList.add("navbar-fundo");
        estado2=0;
    }
    // fundo da coluna
    coluna = document.getElementById("coluna");
    if(estado3==0){
        coluna.classList.remove("fundo-colunas");
        coluna.classList.add("coluna-escura");
        estado3 = 1;
    }else{
        coluna.classList.remove("coluna-escura");
        coluna.classList.add("fundo-colunas");
        estado3 = 0;
    }

}
function favoritar(botao) {
  if (botao.innerHTML == "🤍") {
    botao.innerHTML = "❤";
  } else {
    botao.innerHTML = "🤍";
  }
}