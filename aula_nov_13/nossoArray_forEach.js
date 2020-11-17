class NossoArray 
{
    constructor(array)
    {
        this._array = array
    }

    paraTodos( callback )
    {
        for ( let elemento of this._array )
        {
            callback( elemento )
        }
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
    //reduce
}

let a = new NossoArray([1,2,3])

function printaQuadrado( el )
{
    console.log( el * el )
}



a.paraTodos(( elemento ) => 
{
    console.log( elemento )
})