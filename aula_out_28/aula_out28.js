let meuObjeto = {
    
    notas: ['la', 'mi', 'do','sol'],

    tocar: function (callback) {
        for (let nota of this.cordas)
        callback(nota);
    }
}
console.log(`notas + cordas`);