let _usuariosAutenticados = []

function cadastrar(){
    const nome = String(document.getElementById("nome").value)
    const senha = String(document.getElementById("senha").value)

    let isValid = true
    for(const index in _usuariosAutenticados){
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
    console.log(_usuariosAutenticados);
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
    let isValid = false
    for(const index in listaUsuariosBanco){
        let usuarioAutenticado = listaUsuariosBanco[index]
        if(usuarioAutenticado.nome === nome && usuarioAutenticado.senha === senha){
            isValid = true
            return isValid
        }else{
            return false
        }
    }
}