function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function exibeMenu() {
    return ("<h1>Menu - Bebidas</h1> \n <p>1 - Refrigerante</p><p>2 - Suco</p><p>3 - Água</p>");
}

mostra(exibeMenu());