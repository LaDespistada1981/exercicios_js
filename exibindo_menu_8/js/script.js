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
    
    mostra ("<h3>Recebemos seu pedido. Seu refrigerante está a caminho.</h3>");
    
} else if (menuBebida == 2) {
    
    mostra("<h3>Recebemos seu pedido. Seu suco está a caminho.</h3>");
    
} else if (menuBebida == 3) {
    
    mostra("<h3>Recebemos seu pedido. Sua água está a caminho.</h3>");
    
} else mostra("<h3>Por favor, escolha entre os itens disponíveis no menu!</h3>");

</script>