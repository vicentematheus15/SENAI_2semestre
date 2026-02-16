class Animal {
    emitirSom(){
        console.log(`Som genérico de animal`)
    }
}

class Cachorro extends Animal {
    emitirSom(){
        console.log(`Latir`)
    }
}

class Gato extends Animal {
    emitirSom(){
        console.log(`Miar`)
    }
}

const animais = [new Animal, new Cachorro, new Gato];
animais.forEach(animal => animal.emitirSom());