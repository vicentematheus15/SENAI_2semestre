class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    }
}


class Aluno extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade);
        this.curso = curso;
    }

    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos e estou cursando ${this.curso}!`);
    }
}

const aluno1 = new Aluno("Carlos", 25, "Desenvolvimento de Sistemas");
aluno1.cumprimentar();

