function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function exibeMenu() {
    return ("<h1>Menu - Bebidas</h1> \n <h3><p>1 - Refrigerante</p><p>2 - Suco</p><p>3 - Água</p></h3>");
}

mostra(exibeMenu());

var menuBebida = prompt("Por favor, escolha sua bebida: \n 1- Refrigerante. \n 2-Suco. \n 3- Água.");

if (menuBebida == 1) {
    
    mostra ("<center><h1 style=color:blue>REFRIGERANTE</h1></center>");
    
} else if (menuBebida == 2) {
    
    mostra("<center><h1 style=color:blue>SUCO</h1></center>");
    
} else if (menuBebida == 3) {
    
    mostra("<center><h1 style=color:blue>ÁGUA</h1></center>");
    
} else mostra("<center style=color:blue><h1>ESCOLHA APENAS OS ITENS DO MENU!</h1></center>");
