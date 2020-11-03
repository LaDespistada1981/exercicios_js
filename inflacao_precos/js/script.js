function pulaLinha() {
    document.write("<br><br>");
}
function mostra(frase) {
    pulaLinha();
    document.write(frase);
    pulaLinha();
}

function inflacaoProduto (preco1, preco2) {

    var inflacaoProdutos = (preco2 - preco1);
    return inflacaoProdutos;
}

function mediaInflacao (inflacaoProduto1, inflacaoProduto2 , inflacaoProduto3){

    var mediaInflacao = ((inflacaoProduto1 + inflacaoProduto2 + inflacaoProduto3)/3 )
    return mediaInflacao;
}

function mediaDiaria (inflacaoProduto, quantidadeDias) {
    
    var mediaDiaria = (inflacaoProduto/quantidadeDias);
    return mediaDiariaInflacaoProduto;
}

var inflacaoTomate = inflacaoProduto(3.3, 4.70);
var inflacaoArroz = inflacaoProduto(2.99, 3.25);
var inflacaoCenoura = inflacaoProduto(3.99, 4.14);

var inflacaoMedia = ((inflacaoTomate + inflacaoArroz + inflacaoCenoura)/3);

var quantidadeDias = (30 - 24);

var mediaDiariaInflacaoTomate = (inflacaoTomate/ quantidadeDias);
var mediaDiariaInflacaoArroz = (inflacaoArroz/ quantidadeDias);
var mediaDiariaInflacaoCenoura = (inflacaoCenoura/ quantidadeDias);



mostra("A inflação do preço do tomate entre 24/04 e 30/04 foi " + "R$ " + inflacaoTomate);
mostra("A inflação do preço do arroz entre 24/04 e 30/04 foi " + "R$ " + inflacaoArroz);
mostra("A inflação do preço da cenoura entre 24/04 e 30/04 foi " + "R$ " + inflacaoCenoura);

mostra(" A inflação média no período entre 24/04 e 30/04 foi de " + "R$ " + inflacaoMedia);

mostra(" A inflação média diária de inflação do tomate foi " + "R$ " + mediaDiariaInflacaoTomate);
mostra(" A inflação média diária de inflação do arroz foi " + "R$ " + mediaDiariaInflacaoArroz);
mostra(" A inflação média diária de inflação do cenoura foi " + "R$ " + mediaDiariaInflacaoCenoura);