function mostra(dobro) {
    document.write(dobro);
}

function mostra(metade) {
    document.write(metade);
}

function mostra(saudacao) {
    document.write(saudacao)
}

var n = 9;
var dobro = (2*n);
var metade = (n/2);
var nome = "Roberta";

mostra("<h3>" + "Olá, " + nome + "!</h3>");
mostra("<h3>"+ "O dobro de n é: " + dobro + "</h3>");
mostra("<h3>"+ "A metade de n é: " + metade + "</h3>");