var array1 = [1, 2, 3, 4, 5]
var array2 = [4, 4, 4, 6, 6]

function somaArrays(arr1, arr2) {
    soma = 0;
    soma2 = 0;
    for (i = 0; i < arr1.length; i++) {
        var numeros1 = arr1[i]
        soma = soma + numeros1
    }
    
    for (i = 0; i < arr2.length; i++) {
        var numeros2 = arr2[i]
        soma2 = soma2 + numeros2;
    }
    return soma + soma2;
} 
console.log(somaArrays(array1, array2));