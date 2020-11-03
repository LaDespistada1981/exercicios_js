function pulaLinha() {
    document.write("<br>");
}


function exibeNaTela(resultado) {
    pulaLinha();
    document.write(resultado);
}

function divideLaranjas(laranjas, vizinhos) {
    return Math.trunc(laranjas/vizinhos);
}

function sobraLaranjas(laranjas, vizinhos) {
    return Math.trunc(laranjas%vizinhos);
}


var quantLaranjas = prompt("Informe a quantidade de laranjas para a divisão:");
var quantVizinhos = prompt("Informe a quantidade de vizinhos que entrará no rateio:");

var rateio = divideLaranjas(quantLaranjas, quantVizinhos);

var sobra = sobraLaranjas(quantLaranjas, quantVizinhos);

exibeNaTela("<h1>Cada vizinho deve receber " + rateio + " laranjas.</h1>");
exibeNaTela("<h1>Sobra " + sobra + " laranjas.</h1>");