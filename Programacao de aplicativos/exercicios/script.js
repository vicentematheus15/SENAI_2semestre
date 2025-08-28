let _usuariosAutenticados = []

function cadastrar(){
    const nome = String(document.getElementById("nome").value)
    const senha = String(document.getElementById("senha").value)

    let isValid = true
    for(let index in _usuariosAutenticados){
        let usuario = _usuariosAutenticados[index]
        if(usuario.nome === nome) {
            isValid = false
            alert("Nome de usuário já cadastrado")
            return
        }
    }
    
    if(isValid){
        const obj = {
            nome: nome,
            senha: senha
        }
    _usuariosAutenticados.push(obj)
    alert("Cadastro concluído com sucesso")            
    localStorage.setItem("usuariosAutenticados", JSON.stringify(_usuariosAutenticados))
    }
}
        
function login(){
    const nome = String(document.getElementById("nome").value)
    const senha = String(document.getElementById("senha").value)
    
    let isValid = verificaNoBanco(nome, senha)

    if(isValid){
        alert("Usuário autenticado")
    }else{
        alert("Usuário ou senha inválidos")
    }
}

function verificaNoBanco(nome, senha){
    const listaUsuariosBanco = JSON.parse(localStorage.getItem("usuariosAutenticados"))

    for(let index in listaUsuariosBanco){
        let usuarioAutenticado = listaUsuariosBanco[index]
        if(usuarioAutenticado.nome === nome && usuarioAutenticado.senha === senha){
            return true
        }else{
            return false
        }
    }
}