let carro = {
    carroceria: 1,
    chassis: 1,
    rodas: 4,
    portas: ['pdd', 'pde', 'ptd', 'pte'],
    volante: 1,
    cambio: ['m1', 'm2', 'm3', 'm4', 'm5', 'mr'],
    cor: 'preta',
    marca: 'Renaul',
    modelo: 'Sandero',
    
    andar: function() {
        if (andaPraFrente)
        console.log('O carro avança.')
        else
        console.log('o carro recua.')
    },
    
    acelerar: function() {
        console.log('Acelere o seu veículo, mas não ultrapasse a velocidade permitida.')
    }, 
    
    frear: function() {
        console.log('Lembre-se de frear sempre que encontrar um obstáculo!')
    }
};

console.log(carro.andar)
console.log(carro.acelerar)
console.log(carro['frear'])

let sinal = {
    luzes: ['verde', 'amarela', 'vermelha'],
    
    acender: function() {
        if (sinal.luzes[0]) {
            console.log('Sinal verde, prossiga!');
            
        } if (sinal.luzes[1]) {
            console.log('Atenção, sinal amarelo!');
            
        }if (sinal.luzes[2]) {
            console.log('Sinal vermelho! Pare imediatamente!')
        }
    }
}

console.log(sinal.luzes);
console.log(sinal.luzes[2]);