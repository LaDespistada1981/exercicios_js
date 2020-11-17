class Animais
{
    constructor(patas, olhos)
    {
        this._patas = 'patas';
        this._olhos = 'olhos';
    }

    comer() 
    {
        return console.log('nhoim')
    }
}

class Cachorro extends Animais
{
    constructor( patas, olhos, porte )
    {
        super(patas, olhos);
        this._porte = porte;
    }
}

class Gato extends Animais
{
    constructor( patas, olhos, vidas )
    {
        super(patas, olhos);
        this._vidas = vidas;
    }
}

let dog = new Cachorro(4, 2, 'Médio')
console.log(dog)

let cat = new Gato(4, 2, 7)
console.log(cat)

let array = [dog, cat]
console.log(array)

