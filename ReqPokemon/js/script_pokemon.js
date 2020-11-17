let imagem = document.querySelector('#poke');

let nome = document.querySelector('#name');

let botao = document.querySelector('#req');

botao.addEventListener('click', function()
{
    let request = new XMLHttpRequest();
    let contador = 1;
    contador = contador +=1
    console.log(contador)
    
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${contador}`)
    
    request.addEventListener('load', function()
    {
        if (request.status == 200)
        {
            let response = JSON.parse(this.responseText)

            imagem.src = response.results.url;

            nome.textContent = response.results.name;
        }
    })
    request.send()
})