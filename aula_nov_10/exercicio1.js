//Dado o array e o código a seguir:
//Chame a função ola da forma certa, alterando o array e utilizando o spread operator

let dados = ["Fulano"];
function ola( nomeDaPessoa, saudacao, pontuacao )
{
 console.log( saudacao + " " + nomeDaPessoa + pontuacao );

}
//console.log(...dados)

ola(...dados, 'Olá', '!')
