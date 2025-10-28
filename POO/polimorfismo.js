//Polimorfismo permite que métodos com o mesmo nome tenham comportamentos diferentes dependendo da classe que implementa

//Permite o comportamento diferente para o mesmo metodo

class Animal {
    falar(){
        console.log("Som genérico de animal!");
    }
}

class Cachorro extends Animal {
    falar(){
        console.log("Latido!")
    }
}

class Gato extends Animal {
    falar(){
        console.log("Miado!")
    }
}

const animais = [new Cachorro(), new Gato(), new Animal()];
animais.forEach(a => a.falar());