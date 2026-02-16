class Produto {
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(quantidade){
        this.estoque -= quantidade
    }

    repor(quantidade){
        this.estoque += quantidade
    }

    verEstoque(){
        return this.estoque
    }
}

const produto1 = new Produto("Camisa", 20, 5)
console.log(`Estoque inicial: ${produto1.verEstoque()}`)

produto1.vender(2);
console.log(`Estoque após venda: ${produto1.verEstoque()}`);

produto1.repor(10);
console.log(`Estoque após reposição: ${produto1.verEstoque()}`);