
function criaBtn() {
    var btn = document.createElement('button')
    btn.appendChild(document.createTextNode('Eventos com Mouse'))
    
    return btn
}
document.body.appendChild(criaBtn())

btn.style.width = '200px'
btn.style.height = '200px'
btn.style.fontSize = '20pt'


function sobreBtn() {
    btn.innerHTML = 'Você está com o mouse sobre o botão!'
    btn.style.background = '#f82169'
    btn.style.color = 'white'
}
btn.addEventListener('mouseover', sobreBtn)


function foraBtn() {
    btn.innerHTML = 'Você está fora do botão!'
    btn.style.background = '#7b1aeb'
}
btn.addEventListener('mouseout', foraBtn)


function clicarBtn() {
    btn.innerHTML = 'Você clicou no botão!'
    btn.style.background = '#ceaf01'
}
btn.addEventListener('mousedown', clicarBtn)


function desClica() {
    btn.innerHTML = 'Você soltou o click! Você está com o mouse sobre o botão!'
    btn.style.background = '#86d313'
}
btn.addEventListener('mouseup', desClica)