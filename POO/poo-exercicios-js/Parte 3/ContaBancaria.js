class ContaBancaria {
    #saldo = 0;

    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor
        }else{
            console.log("Não é possível depositar valores iguais ou inferiores a 0!")
        }
    }

    sacar(valor){
        if (this.#saldo >0) {
            this.#saldo -= valor
        }else{
            console.log("Saldo insuficiente!")
        }
    }

    verSaldo(){
        return this.#saldo
    }
}

const conta = new ContaBancaria();

conta.depositar(-20);
conta.verSaldo();

conta.sacar(20);
conta.verSaldo();