let imagem = document.querySelector("#poke");

let name = document.querySelector('#name');

let botao = document.querySelector('#req');

let contador = 1;

contador = contador++;


botao.addEventListener('click', () =>
{

    let request = new XMLHttpRequest();
    
    request.open('GET','https://pokeapi.co/api/v2/'+contador)
    
    request.addEventListener('load',function(){

        if(request.status == 200)
        {
            let poke = JSON.parse(this.responseText)

            imagem.src = poke.results[0].url;

            name.textContent = poke.results[0].name;
        }
    })
    request.send()
});
