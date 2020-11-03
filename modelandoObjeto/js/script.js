let  zicao = {
    patas:['fe', 'fd', 'te'],
    olhos: ['e', 'd'],
    porte: 'pequeno',
    corDoPelo: 'azul',
    comprimentoDoPelo: 15,
    
    latir: function(lateAlto) {
        if (lateAlto)
        console.log('AUAU');
        else
        console.log('auau');
    },
    
    cheirar: function() {
        console.log('snif snif');
    },
    
    brincar: function() {
        console.log(['pula','rola', 'deita'])
    },
    
    lamber: function() {
        console.log('lamb lamb');
    },
    
    morder: function() {
        console.log('nhac nhac')
    }
};


console.log(zicao);
console.log(zicao.porte);

let atributo = 'corDoPelo';
console.log(zicao[atributo]);
console.log(zicao['corDoPelo']);

console.log(zicao.lamber());// como a função brinca não retorna nada, aparece undefined, por isso, não precisa de console.log() para chamar a função brinca ou cheira ou ...
zicao.brincar();// forma de chamar uma função que não retorna nada
zicao['brincar']();//outra forma de chamar a função 

zicao.cheirar();
zicao.cheirar = () => {
    console.log("vrrrrrrr");
}

zicao.latir(true);
zicao['latir'](false)

//zicao.rabo = 'longo';//adicionou um rabo no objeto
zicao['rabo'] = 'longo';

// let arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(arr[0]);

// arr['push']( 8 );
// arr.push( 9 );
// console.log(arr);