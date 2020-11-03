let carro = {
    
    gasolina: 50,
    
    acelerar:function (x){
        return this.gasolina - (1 * x)
    }
    
}

console.log(carro.gasolina);
console.log(carro.acelerar(2));