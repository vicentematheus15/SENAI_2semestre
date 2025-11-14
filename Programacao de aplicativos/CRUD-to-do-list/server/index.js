//definindo mysql como base de dados
const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require ("cors");
app.use(cors());
app.use(express.json())


//cria a conexão com o banco de dados
const db = mysql2.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"senai",
    database:"to_do_list_app",
    port:3306
});
//formata a sintaxe da data no mysql
function formatDateForMySQL(dateString) {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

//GET POST PUT DELETE

//método GET 
//faz a requisicao (req) para buscar uma tarefa no banco e espera uma resposta (res)

//define a rota(route)
app.get("/",(req,res)=>{
    res.json({status:200})
})

//(model e controller) - o model define qual será a interação com o banco "SELECT.." e o controller da a resposta por meio do código que mostra se deu erro ou se deu certo (200, 201, 500, 404, 401, cada codigo tem um significado)
app.get("/pegarTask",(req,res)=>{
    db.query('SELECT * FROM task',(err,result)=>{                                             
        if(err){                                                                                  
            res.status(500).json({message:"Erro no servidor", error:err})}
        else{
            res.status(200).json({message:"Tarefas buscadas com sucesso", tasks:result})
        }
    })
})

//metodo POST
//cria constantes que vão receber os atributos do objeto (task) que estão do body da requisição
app.post("/criar",(req,res)=>{
    const title = req.body.title
    const description = req.body.description
    const priority = req.body.priority
    const completed = req.body.completed
    const createdAt = formatDateForMySQL(req.body.createdAt);

    //model: faz a query para inserir os atributos da task no banco de dados
    db.query('INSERT INTO task (title,description,priority,completed,createdAt) VALUES (?,?,?,?,?)',[title,description,priority,completed,createdAt],(err,result)=>{
        //controller: retorna a resposta para a requisição post com o código (500, 201)
        if(err){
            res.status(500).json({message:"Erro no servidor", error:err})
            console.log("erro no servidor",err)
        }

        else{
            res.status(201).json({message:"Tarefa criada com sucesso", taskId:result.insertId})
        }
    } )
})

app.put("/atualizar/:id", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const priority = req.body.priority;
    const completed = req.body.completed;
    const createdAt = req.body.createdAt ? formatDateForMySQL(req.body.createdAt) : null
    const id = req.params.id;

    db.query(
        "UPDATE task SET title=?, description=?, priority=?, completed=?, createdAt=? WHERE id=?",
        [title, description, priority, completed, createdAt, id],
        (err, result) => {
            if (err) {
                res.status(500).json({ message: "Erro no servidor, verifique a resposta", error: err,createdAt:createdAt});
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: "Tarefa nao encontrada",taskId:id, affectedRows: result.affectedRows });
            } else {
                res.status(200).json({ message: "task atualizada com sucesso", taskId: id,affectedRows: result.affectedRows});
            }
        }
    );
})

app.delete("/deletar/:id",(req,res)=>{
    const id = req.params.id
    db.query("DELETE FROM task WHERE id=?",[id],(err,result)=>{
        if(err){
            res.status(500).json({message:"Erro no servidor,verifique a resposta",error:err})
        }else if(result.affectedRows ===0){
            res.status(404).json({message:"Tarefa nao encontrada"})
        }else{
            res.status(200).json({message:"Tarefa deletada",taskId:id})
        }
    })

})


app.listen(3001,()=>{
    console.log("servidor rodando")
})
