let campoTarefa = document.querySelector(".adicionar-tarefa input");
let botaoAdicionar = document.querySelector(".adicionar-tarefa button");
let tarefa = [];

botaoAdicionar.onclick = adicionarTarefa;

function adicionarTarefa() {
  if(campoTarefa.value === "") {
    alert("Você não digitou uma tarefa");
    return false;
  }
  else {
    tarefa.push(campoTarefa.value);
    console.log(tarefa);
    campoTarefa.value = "";
  }
}

function removerTarefa() {}
function listarTarefa() {}
