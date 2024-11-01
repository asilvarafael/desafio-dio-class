class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        if (this.tipo === "mago") {
            ataque = "bola de fogo";
        } else if (this.tipo === "guerreiro") {
            ataque = "machado giratório";
        } else if (this.tipo === "monge") {
            ataque = "soco destuidor";
        } else if (this.tipo === "ninja") {
            ataque = "lâmina das sombras";
        } else {
            ataque = "realizou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new heroi("Gimli", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new heroi("Gandalf", 150, "mago");
heroi2.atacar();

const heroi3 = new heroi("Xin Mira", 40, "ninja");
heroi3.atacar();
