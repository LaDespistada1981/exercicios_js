var listaNumeros = [-1, 3, 27, -9000, 4, 4, 4, -0.5, 2, -5]

function filtraNumeros(arr) {
    var soma = 0;
    var numerosPositivos = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numerosPositivos = arr[i];
            soma = soma + numerosPositivos;
        }
    }
    return soma;
}
console.log(filtraNumeros(listaNumeros));
document.write(filtraNumeros(listaNumeros));