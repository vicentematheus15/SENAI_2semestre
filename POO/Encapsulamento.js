// encapsulamento é a tecnica de "esconder" detalhes internos de uma classe e controlar o acesso a ela

class ContaBancaria {
    $saldo = 0; //atributo privado é só colocar "$" na frente

    depositar(valor){
        this.$saldo += valor;
    }

    verSaldo(){
        return this.$saldo;
    }
}