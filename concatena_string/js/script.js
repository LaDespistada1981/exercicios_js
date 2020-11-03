function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    pulaLinha();
    document.write(frase);
    pulaLinha();
}

function concatena(str1, str2) {
    return (str1 + str2);
}

var str1 = "<center><h1>Olá, </h1><center>";
var str2 = "<center><h1>Mundo!</h1><center>";

mostra(concatena(str1,str2));