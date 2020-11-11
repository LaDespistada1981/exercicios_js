//Dado o array a seguir:
//Utilize o método map para mostrar um array que contém área dos quadrados respectivamente

let listaDeQuadrados =
[
 {
 largura: 100,
 altura: 100,
 },
 {
 largura: 30,
 altura: 10,
 },
 {
 largura: 20,
 altura: 13,
 },
 {
 largura: 5,
 altura: 5,
 },
 {
 largura: 1,
 altura: 1,
}, 
]

let area = listaDeQuadrados.map((elemento) => elemento.altura * elemento.largura);

console.log(area)