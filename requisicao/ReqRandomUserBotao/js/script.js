//Criar um objeto;
//Criar um botão que chama o objeto criado, 
//Mostrar na tela os dados do objeto: gender;name;

//segunda etapa: 
//buscar esses dados da API e exibir na tela para o usuário

let botao = document.querySelector('#req');

let imagem = document.querySelector("#imagem");

let name = document.querySelector('#name');

let gender = document.querySelector('#gender');


botao.addEventListener('click', function() 
{
    let perfil = new XMLHttpRequest();
    
    perfil.open('GET','https://randomuser.me/api')
    
    perfil.addEventListener('load',function(){

        let pessoa = JSON.parse(this.responseText)
        
        imagem.src = pessoa.results[0].picture.large;
        
        name.textContent = `${pessoa.results[0].name.last}, ${pessoa.results[0].name.first}`;
        
        gender.textContent = pessoa.results[0].gender;
        
    })
    perfil.send()
});
