class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`)
    }
}

const pessoa1 = new Pessoa("Carlos", 25);
pessoa1.cumprimentar();