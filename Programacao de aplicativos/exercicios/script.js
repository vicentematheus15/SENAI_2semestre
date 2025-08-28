let _usuariosAutenticados = []

function cadastrar(){
    const nome = document.getElementById("nomeCadastro").value
    const senha = document.getElementById("senhaCadastro").value

    let isValid = true
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
    localStorage.getItem(JSON.parse(_usuariosAutenticados))

    for(index in _usuariosAutenticados){
        let usuarioAutenticado = _usuariosAutenticados[index]
        if(usuarioAutenticado.nome === nome && usuarioAutenticado.senha === senha){
            alert("Usuário autenticado")
        }
    }
}