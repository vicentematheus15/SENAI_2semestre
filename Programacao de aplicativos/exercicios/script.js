let _usuariosAutenticados = []

function pegarDados(){
    const nome = String(document.getElementById("nomeCadastro").value)
    const senha = String(document.getElementById("senhaCadastro").value)
}

function cadastrar(){
    pegarDados(nome, senha)
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
    pegarDados(nome, senha)
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