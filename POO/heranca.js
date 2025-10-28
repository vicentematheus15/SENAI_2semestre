//herança permite que a classe (filho) reaproveite e extenda comportamentos de outra classe (pai)

class  Funcionario extends Pessoa {
    //atributos
    constructor(nome, idade, cargo){    
        this.nome = nome;
        this.idade = idade;
    }
    //métodos
    falar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}