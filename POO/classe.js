//é um modelo que define um objeto e as caracteristicas dele
class Pessoa {
    //atributos
    constructor(nome, idade){    
        this.nome = nome;
        this.idade = idade;
    }
    //métodos
    falar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

//testando classe
const pesssoa1 = new Pessoa("Natan", 25);
pesssoa1.falar(); //chama o método "falar"

const pessoa2 = new Pessoa("Maria", 30);
pessoa2.falar();