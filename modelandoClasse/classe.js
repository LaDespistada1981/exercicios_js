class ViraLata
{
    patas = 4
    orelhas = 2
    pelo = 'curto'

    constructor(numeroDePatas, numeroDeOrelhas, tamanhoDePelo)
    {
        if(numeroDePatas !== undefined) {
            this.patas = numeroDePatas
        }

        if(numeroDeOrelhas !== undefined) {
            this.orelhas = numeroDeOrelhas
        }

        if(tamanhoDePelo !== undefined) {
            this.pelo = tamanhoDePelo
        }
    }

    latir()
    {
        return 'AU,AU,AU'
    }

    cheirar()
    {
        return 'Snif, Snif!'
    }

    tosar()
    {
        this.pelo = 'curto'
        return 'Arg! Tá na régua!'
    }
}

let cachorro = new ViraLata()

let cachorroRobertinha = new ViraLata(2, 2, 'curto');

cachorroRobertinha.latir();

cachorroRobertinha.cheirar();

cachorroRobertinha.tosar();

console.log(cachorroRobertinha);

console.log(cachorroRobertinha.latir())
console.log(cachorroRobertinha.cheirar())
console.log(cachorroRobertinha.tosar())
console.log(cachorro)