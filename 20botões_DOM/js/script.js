function criarBotao() {
    
    var array = document.getElementById('botaoArea')
    
    for (var i = 0; i < 20; i++) {
        var btn = document.createElement('button')
        btn.appendChild(document.createTextNode(`Botão ${i}`))
        array.appendChild(btn)
    }
}