document.querySelector("#filtrarPlanejadas").addEventListener("click", () =>{
  let tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
  filtrar(tarefasFiltradas)
})

document.querySelector("#filtrarRealizadas").addEventListener("click", () =>{
  let tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida)
  filtrar(tarefasFiltradas)
})

document.querySelector("#busca").addEventListener("keyup", () =>{
  let busca = document.querySelector("#busca").value
  let tarefasFiltradas = tarefas.filter(tarefa => tarefa.titulo.toLowerCase().includes(busca.toLowerCase()))
  filtrar(tarefasFiltradas)
})


document.querySelector("#filtrarPlanejadas").addEventListener("click", () =>{
  let tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
  filtrar(tarefasFiltradas)
})

document.querySelector("#filtrarRealizadas").addEventListener("click", () =>{
  let tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida)
  filtrar(tarefasFiltradas)
})

document.querySelector("#busca").addEventListener("keyup", () =>{
  let busca = document.querySelector("#busca").value
  let tarefasFiltradas = tarefas.filter(tarefa => tarefa.titulo.toLowerCase().includes(busca.toLowerCase()))
  filtrar(tarefasFiltradas)
})