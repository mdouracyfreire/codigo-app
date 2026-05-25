let campoTarefa = document.querySelector(".adicionar-tarefa input");
let botaoAdicionar = document.querySelector(".adicionar-tarefa button");
let listaDeTarefas = document.querySelector(".listar-tarefa");
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
    listarTarefa();
  }
}

function removerTarefa() {}

function listarTarefa() {
  listaDeTarefas.innerHTML = "";

  tarefa.map(item => {
    let novaTarefa = document.createElement("div");
    novaTarefa.classList.add("tarefa");

    let textoTarefa = document.createElement("p");
    textoTarefa.appendChild(document.createTextNode(item));

    novaTarefa.appendChild(textoTarefa);
    listaDeTarefas.appendChild(novaTarefa);
  });
}
