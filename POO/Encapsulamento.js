// encapsulamento é a tecnica de "esconder" detalhes internos de uma classe e controlar o acesso a ela

class ContaBancaria {
    #saldo = 0; //atributo privado é só colocar "#" na frente

    depositar(valor){
        if (valor > 0) this.#saldo += valor;
    }

    verSaldo(){
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(500);
console.log(conta.verSaldo());