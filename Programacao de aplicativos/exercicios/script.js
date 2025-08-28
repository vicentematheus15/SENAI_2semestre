let _usuariosAutenticados = []



function cadastrar(){
    const nome = String(document.getElementById("nomeCadastro").value)
    const senha = String(document.getElementById("senhaCadastro").value)

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
    console.log(_usuariosAutenticados);
}
        
function login(){
    const nome = String(document.getElementById("nomeLogin").value)
    const senha = String(document.getElementById("senhaLogin").value)    
    JSON.parse(localStorage.getItem("usuariosAutenticados"))

    for(index in _usuariosAutenticados){
        
        let usuarioAutenticado = _usuariosAutenticados[index]
        if(usuarioAutenticado.nome === nome && usuarioAutenticado.senha === senha){
            alert("Usuário autenticado")
            return 
        }else{
            return alert("Usuário ou senha inválidos")
        }
    }
}