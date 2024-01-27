function abrirOutros() {
    const genero = document.getElementsByName("genero")
    const outros = document.getElementById("outros")
    if (genero[2].checked) {
        outros.disabled = false
    } else {
        outros.disabled = true
    }
}

function togglePass() {
    const senha1 = document.querySelector("#senha1")
    const senha2 = document.querySelector("#senha2")
    if (senha1.type == "password" || senha2.type == "password") {
        senha1.type = "text"
        senha2.type = "text"
    } else {
        senha1.type = "password"
        senha2.type = "password"
    }
}


function pesquisarCEP(){
    const cep = (document.getElementById("CEP").value)
    if (cep.length == "" ){ alert("cep não encontrado")

    }else if(cep.length !=8){
        alert("formato de CEP invalido")

    }else{
        viaCep(cep)
    }
}

function viaCep (cep){
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then (response => {
document.getElementById("rua").value=response.logradouro
document.getElementById("complemento").value=response.complemento
document.getElementById("bairro").value=response.bairro
document.getElementById("cidade").value=response.localidade
document.getElementById("estado").value=response.uf




})

}

