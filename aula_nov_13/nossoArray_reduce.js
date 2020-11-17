class NossoArray 
{
    constructor(array)
    {
        this._array = array
    }

    paraTodos( callback )
    {
        for ( let i=0; i<this._array.length; i++ )
        {
            let elemento = this._array[i]

            callback( elemento )
        }
    }
    //map

    redutor( callback, valorInicial = 0 )
    {
        let acumulado = valorInicial;

        for ( let elementoAtual of this._array )
        {
            console.log( `Passei o ${acumulado} e o ${elementoAtual} para a maquininha` )
            acumulado = callback( acumulado, elementoAtual)
            console.log( `Após a minha maquininha calcular, o elemento acumulado é ${acumulado}`)
        }

        return acumulado;
    }
}

let a = new NossoArray([1,2,3])

let valor = a.redutor(

    (acumulado, elementoAtual) =>
    {
        return acumulado += elementoAtual
    }
)
console.log( valor )


// ################################


class NossoArray 
{
    constructor(array)
    {
        this._array = array
    }

    paraTodos( callback )
    {
        for ( let i=0; i<this._array.length; i++ )
        {
            let elemento = this._array[i]

            callback( elemento )
        }
    }
    //map

    redutor( callback, valorInicial = 0 )
    {
        let acumulado = valorInicial;

        for ( let elementoAtual of this._array )
        {
            console.log( `Passei o ${acumulado} e o ${elementoAtual} para a maquininha` )
            acumulado = callback( acumulado, elementoAtual)
            console.log( `Após a minha maquininha calcular, o elemento acumulado é ${acumulado}`)
        }

        return acumulado;
    }
}

let a = new NossoArray([1,2,3])

let valor = a.redutor(

    (acumulado, elementoAtual) =>
    {
        return acumulado += elementoAtual
    }
)
console.log( valor )