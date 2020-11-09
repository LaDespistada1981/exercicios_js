let imgPerfil = document.querySelector('#img');

let name = document.querySelector('#name')

let gender = document.querySelector('#gender')

let perfil = new XMLHttpRequest();

perfil.open('GET','https://randomuser.me/api')

perfil.addEventListener('load',function(){
    let pessoa = JSON.parse(this.responseText)

    imgPerfil.src = pessoa.results[0].picture.large;

    name.textContent = `${pessoa.results[0].name.last}, ${pessoa.results[0].name.first}`;

    gender.textContent = pessoa.results[0].gender;

})
perfil.send()