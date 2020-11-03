function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    pulaLinha();
    document.write(frase);
    pulaLinha();
}

function recebeNumero(n) {
    
    return ("<center><h1>O resto de " + n + " dividido por 9 é: " + resto9 + "</h1></center>");
}

var n = prompt("Informe um número diferente de 0:");

var resto9 = (n % 9);

mostra(recebeNumero(n));