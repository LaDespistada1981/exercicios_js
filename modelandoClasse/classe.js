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

let cachorroRobertinha = new ViraLata(2, 2, 'curto');

cachorro.latir();