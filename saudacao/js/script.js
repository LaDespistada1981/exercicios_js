function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    pulaLinha();
    document.write(frase);
    pulaLinha();
}

function recebeNome(nome) {
    return nome;
}

var nome = prompt("Qual o seu nome?");

mostra("<center><h1 style=color:blue>Olá, " + nome + "! Tudo bem?</h1></center>");