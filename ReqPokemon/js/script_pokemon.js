let imagem = document.querySelector('#poke');

let nome = document.querySelector('#name');

let botao = document.getElementById('#req');

botao.addEventListener('click', () =>
{
    let contador = 1;
    contador++

    let request = new XMLHttpRequest;
    
    request.open('GET','https://pokeapi.co/api/v2/pokemon/1', false )
    
    
    request.addEventListener('load', () =>
    {
        if (request.status == 200)
        {
            let dados = JSON.parse(this.responseText);
            
            imagem.src = dados.results[0].url;

            nome.textContent = dados.results[0].name;
        }
        document.body.appendChild('.container');
    })

    request.send()
}