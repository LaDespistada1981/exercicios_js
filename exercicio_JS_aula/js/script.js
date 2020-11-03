function separaLinha() {
    document.write("<hr>");
}

function mostra(frase) {
    document.write(frase);
    separaLinha();
}

var meuNome = "Roberta";
var numFilhos = 2;
var vouMorar = "Berlim";
var vouSer = "Web developer";

mostra( "<h3>" + "A vidente prevê: " +  meuNome + " terá " + numFilhos + " filhos e viverá em " + vouMorar + " trabalhando como " + vouSer + "." + "</h3>");


function mostra(frase) {
    document.write(frase);
    separaLinha();
}

var item_1 = "meu canivete suiço";
var item_2 = "meu ukulele";
var item_3 = "um dicionário de acordes para ukulele.";

mostra( "<h3>" + "Eu levaria para uma ilha deserta: " + item_1 + ", " + item_2 + " e " + item_3 + "</h3>")


function escolhaAnimal(frase) {
    document.write(frase);
}

var animalEscolhido = "falcão";

escolhaAnimal( "<h3>" + "Num primeiro momento, eu gostaria de ser um: " + animalEscolhido + ".</h3>");

animalEscolhido = "guepardo";

escolhaAnimal("<h3>" + "Pensando melhor, prefiro ser um " + animalEscolhido +".<h3>"); 
