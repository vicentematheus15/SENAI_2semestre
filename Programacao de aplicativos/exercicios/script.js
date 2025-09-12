// Array para armazenar os usuários cadastrados (em memória enquanto a página estiver aberta)
let _usuariosAutenticados = []


// ---------------- FUNÇÃO DE CADASTRO ----------------
function cadastrar(){
    // Pega o valor digitado no campo "nome" e converte para string
    const nome = String(document.getElementById("nome").value)

    // Pega o valor digitado no campo "senha" e converte para string
    const senha = String(document.getElementById("senha").value)

    // Flag que controla se o cadastro é válido
    let isValid = true

    // Percorre todos os usuários já cadastrados no array
    for(let index in _usuariosAutenticados){
        let usuario = _usuariosAutenticados[index]

        // Se o nome já existir, impede o cadastro
        if(usuario.nome === nome) {
            isValid = false
            alert("Nome de usuário já cadastrado")
            return // interrompe a função
        }
    }
    
    // Se o nome for válido (não existe ainda)
    if(isValid){
        // Cria objeto do usuário
        const obj = {
            nome: nome,
            senha: senha
        }

        // Adiciona usuário ao array em memória
        _usuariosAutenticados.push(obj)

        // Mostra confirmação
        alert("Cadastro concluído com sucesso")            

        // Salva a lista no localStorage para persistir os dados mesmo após recarregar a página
        localStorage.setItem("usuariosAutenticados", JSON.stringify(_usuariosAutenticados))
    }
}


// ---------------- FUNÇÃO DE LOGIN ----------------
function login(){
    // Pega valores do input
    const nome = String(document.getElementById("nome").value)
    const senha = String(document.getElementById("senha").value)
    
    // Verifica se usuário e senha existem no "banco" (localStorage)
    let isValid = verificaNoBanco(nome, senha)

    // Se for válido, redireciona para home.html
    if(isValid){
        window.location.href = './home.html'
    }else{
        // Caso contrário, mostra erro
        alert("Usuário ou senha inválidos")
    }
}


// ---------------- VERIFICA USUÁRIO NO BANCO (LOCALSTORAGE) ----------------
function verificaNoBanco(nome, senha){
    // Recupera lista de usuários armazenados no localStorage
    const listaUsuariosBanco = JSON.parse(localStorage.getItem("usuariosAutenticados"))

    // Percorre lista de usuários cadastrados
    for(let index in listaUsuariosBanco){
        let usuarioAutenticado = listaUsuariosBanco[index]

        // Verifica se nome e senha conferem
        if(usuarioAutenticado.nome === nome && usuarioAutenticado.senha === senha){
            return true // encontrado!
        }
    }
    return false // se não achou, retorna falso
}


// ---------------- FAZER PERGUNTA PARA A API GEMINI ----------------
async function perguntar(){
    // Chave de API do Google Gemini (⚠️ nunca deixar exposta em código público)
    let apiKey = 'AIzaSyAfSv6vU1KhdLkot5MT0mLw5j4Hzs6L5os'

    // Endpoint da API Gemini
    let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

    // Pega o valor digitado no input com id "prompt"
    const prompt = document.getElementById('prompt').value

    // Faz uma requisição POST para a API Gemini
    let resposta = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "contents": [
              {
                "parts": [
                  {
                    "text": prompt // envia o texto digitado
                  }
                ]
              }
            ]
        })
    });

    // Converte a resposta para JSON
    const info = await resposta.json();

    // Acessa o texto da resposta gerada pela IA
    const text = info.candidates[0].content.parts[0].text

    // Mostra em um alert
    alert(text)

    // Exibe toda a resposta no console (para debug)
    console.log(info)
}
