class Forma {
    
    calcularArea(){

    }
}

class Quadrado extends Forma {
    constructor(lado){
        super()
        this.lado = lado;
    }
    calcularArea(){
        return this.lado * this.lado
    }
}

class Retangulo extends Forma {
    constructor(base, altura){
        super()
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura
    }
}

class Circulo extends Forma {
    constructor(raio){
        super()
        this.raio = raio
    }
    calcularArea(){
        return Math.PI * Math.pow(this.raio, 2)
    }
}

const formas = [
    new Quadrado(5, 5),
    new Retangulo(5, 10),
    new Circulo(2)
]
for (const forma of formas){
    console.log(`${forma.constructor.name} - Área: ${forma.calcularArea()}`)
}