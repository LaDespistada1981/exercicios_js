//Criar um objeto;
//Criar um botão que chama o objeto criado, 
//Mostrar na tela os dados do objeto: gender;name;

//segunda etapa: 
//buscar esses dados da API e exibir na tela para o usuário

class UserModel
{
    constructor()
    {
        this._image = ''
        this._name = ''
        this._gender = ''
    }

    buscaPerfil()
    {
        let request = new XMLHttpRequest();

        request.open('GET','https://randomuser.me/api', false )
        
        request.addEventListener('load', () =>
        {
            if (request.status == 200) 
            {
                let dados = this._processaResponse (request.responseText)

                this._atualiza( dados )
            }
        });
        request.send()
        console.log(request)
    }

    _processaResponse( responseString )
    {
        console.log( 'model atualizando')
        let response = JSON.parse( responseString );

        return response

    }

    _atualiza ( dados )
    {
        console.log('atualizando dados')
        this._image = dados.results[0].picture.large;
        this._name = dados.results[0].name.first
        this._gender = dados.results[0].gender;
    }

    getImage()
    {
        return this._image
    }

    getName()
    {
        return this._name
    }

    getGender()
    {
        return this._gender
    }
}


class UserView
{
    constructor(){console.log('criação view')}

    renderView (model)
    {
        let botao = document.querySelector('#req')
        
    
        let imagem = document.querySelector("#imagem");

        imagem.src = model.getImage()
    
        let name = document.querySelector('#name');
        
        name.textContent = model.getName()
    
        let gender = document.querySelector('#gender');
        gender.textContent = model.getGender()
    }
}

class UserController
{
    constructor() {console.log('controller criada')}

    adicionaPerfil()
    {
        let user = new UserModel()
        user.buscaPerfil()

        let view = new UserView()
        view.renderView(user)

    }
}

let controller = new UserController()

req.addEventListener('click', controller.adicionaPerfil)
    