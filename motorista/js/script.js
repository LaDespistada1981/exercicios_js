function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    pulaLinha();
    document.write(frase);
    pulaLinha();
}

function podeDirigir(idade, idadePermitida) {
    
    if(idadeUsuario >= idadePermitidaBrasil) {
        
        return ("<h1><center>Você pode dirigir no Brasil!<center><h1>");
        
    } else {
        
        return ("<h1><center>Você não pode dirigir no Brasil!<center><h1>");
    }
}

var idadeUsuario = prompt("Qual a sua idade?");

var idadePermitidaBrasil = 18;

mostra(podeDirigir(idadeUsuario, idadePermitidaBrasil));