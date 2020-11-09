class ViraLata
{
    patas = 4
    orelhas = 2
    pelo = "longo"

    constructor(numeroDePatas, numeroDeOrelhas, tamanhoDePelo)
    {
        if(numeroDeOrelhas !== undefined){
            this.patas = numeroDePatas
        }
        if(numeroDeOrelhas !== undefined){
            this.orelhas = numeroDeOrelhas
        }
        if(tamanhoDePelo !== undefined){
            this.pelo = tamanhoDePelo
        }
    }

    latir()
    {

        return "AU AU AU AU"
    }

    cheirar(){

        return "Snif Snif"
    }

    corteDePelo()
    {
        this.pelo = "curto"

        return 'arg ta, "NA REGUA!!!"'
    }
}

let cachorroDoMarcus = new ViraLata(8, 4, "curto")
let cachorroDoLorenzo = new ViraLata()
let cachorroDaRoberta = new ViraLata(3, 0)
let cachorroDaAmanda = new ViraLata()

console.log(cachorroDoMarcus)
console.log(cachorroDoLorenzo)
console.log(cachorroDaRoberta)
console.log(cachorroDaAmanda)

console.log(cachorro.latir())