document.querySelector("#salvar").addEventListener("click", cadastrar)

let tarefas = []

window.addEventListener("load", () => {
    tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    atualizar()
})

function atualizar(){
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    document.querySelector("#tarefas").innerHTML = ""
    tarefas.forEach(tarefa => document.querySelector("#tarefas").innerHTML += criarCard(tarefa))
}

function filtrar(lista){
    document.querySelector("#tarefas").innerHTML = ""
    lista.forEach(tarefa => { 
        document.querySelector("#tarefas").innerHTML += criarCard(tarefa)}
    )
}

function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const estrelas = document.querySelector("#estrelas").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa = { //JSON Java Script Object Notation
        id: Date.now(),
        titulo,
        estrelas,
        categoria,
        concluida: false
    }

    if (!isValid(tarefa.titulo, document.querySelector("#titulo"))) return
    if (!isValid(tarefa.estrelas, document.querySelector("#estrelas"))) return

    tarefas.push(tarefa)

    atualizar()
    modal.hide()
}

function isValid(valor, campo){
    if(valor.length == 0){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }else{
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }

}


function apagar(id){
    tarefas = tarefas.filter(tarefa => tarefa.id !== id)  //recebe uma tarefa e retorna uma função caso o id seja compativel 
    atualizar()
}

function concluir(id){
    let tarefaEncontrada = tarefas.find(tarefa => tarefa.id == id) //se a tarefa é igual a tarefa que recebi 
    tarefaEncontrada.concluida = true
    atualizar()
}

function criarCard(tarefa) {

    let disabled = tarefa.concluida ? "disabled" : ""
    //let disabled = test ? valor_se_true : valor_se_false 
    //operador ternário substitui o if caso ele tenha apenas uma atribuição
    
    /*if(tarefa.concluida == true){
        disabled = "disabled"
    }else{
        disabled = ""
    }*/ 

    let starsHtml = "";
    for (let i = 0; i < tarefa.estrelas; i++) {
        starsHtml += '<i class="bi bi-star-fill"></i>';
    }

    const card = `
    <div class="row mx-auto my-2 g-3">
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
            <div class="card-header">
                ${tarefa.titulo}
            </div>
            <div class="card-body">
                <p class="card-text">Adicionar essa viagem no seu quadro de interesses</p>
                <p class="card-text">${tarefa.categoria}</p>
                <span class="badge text-bg-warning">${starsHtml}</span>
            </div>
            <div class="card-footer">
                <a onClick="concluir(${tarefa.id})" href="#" class="btn btn-success" title="marcar como concluída" class="btn btn-success ${disabled}">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(${tarefa.id})" class="btn btn-danger" title="apagar tarefa">
                    <i class="bi bi-trash3"></i>
                </a>
            </div>  <!-- card footer -->
        </div> <!-- card -->
    </div>
</div> 
    ` 
    return card
}