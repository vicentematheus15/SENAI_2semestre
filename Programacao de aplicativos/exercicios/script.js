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
        window.location.href = './home.html'
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
        }
    }
    return false
}

async function perguntar(){
    let apiKey = 'AIzaSyAfSv6vU1KhdLkot5MT0mLw5j4Hzs6L5os'
    let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
    const prompt = document.getElementById('prompt').value

    let resposta = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "contents": [
              {
                "parts": [
                  {
                    "text": prompt
                  }
                ]
              }
            ]
          })
    });

    const info = await resposta.json();
    const text = info.candidates[0].content.parts[0].text
    alert(text)
    console.log(info)
}