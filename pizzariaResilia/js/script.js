function pulaLinha() {
    document.write("<br><br>");
}

function mostra(resultado) {
    pulaLinha();
    document.write(resultado);
    pulaLinha();
}

function lucroPizza(precoCusto, precoVenda, impostoPizza) {
    var lucro = (precoVenda - precoCusto - impostoPizza);
    return lucro;
}

var nomePizza = prompt("Informe o nome da pizza que deseja calcular:");
var precoCustoInformado = prompt("Informe o preço de custo da pizza que deseja calcular:");
var precoVendaInformado = prompt("Informe o preço de venda da pizza que deseja calcular:");

var impostoPizzaVendida = (precoVendaInformado * 0.089);

var lucroLiquido = lucroPizza(precoCustoInformado, precoVendaInformado, impostoPizzaVendida);


mostra("Para a pizza " + nomePizza + " o lucro líquido é de R$ " + lucroLiquido + " e o imposto é de R$ " +  impostoPizzaVendida + ".");