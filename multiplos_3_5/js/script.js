var arrayNum = [0, 3, 5, 8, 9, 11, 13, 15, 18, 23]

function somaMultiplos(arr) {
    var soma = 0;
    var numerosMultipos = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
            numerosMultipos = arr[i];
            soma = soma + numerosMultipos;
        }
    }
    return soma;
}
console.log(somaMultiplos(arrayNum));