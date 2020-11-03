function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    pulaLinha();
    document.write(frase);
    pulaLinha();
}

function sinalizar(cor) {
    if(cor == "verde") {
        return ("<center><h1 style=color:lightgreen>Você pode passar!</style></center><h1>");
        
    } else if (cor == "amarelo") {
        return ("<center><h1 style=color:#e4bf06>É melhor freiar!</center><h1>");
        
    } if (cor == "vermelho"); {
        return ("<center><h1 style=color:red>Pare já!<h1></center>");
    } 
}

var cor = prompt("Escolha uma cor entre verde, amarelo e vermelho: ");

mostra (sinalizar(cor));