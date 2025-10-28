//herança permite que a classe (filho) reaproveite e extenda comportamentos de outra classe (pai)

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

class  Funcionario extends Pessoa {
    //atributos
    constructor(nome, idade, cargo){    
        super(nome, idade); //recebe da classe pai (pessoa)
        this.cargo = cargo;
    }
    //métodos
    trabalhar(){
        console.log(`${this.nome} está trabalhando como ${this.cargo}`);
    }
    
}

const funcionario1 = new Funcionario("Jhon", 20, "Desenvolvedor");
funcionario1.trabalhar();
funcionario1.falar();