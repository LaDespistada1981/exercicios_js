/**
 * Dada a classe Boleto a seguir:
 * 
 * 1. Valide o valor passado no construtor do Boleto: se o valor for menor ou
 *    igual a zero, lance um erro com a mensagem "O valor do boleto precisa
 *    ser positivo!"
 * 
 * 2. Crie um atributo ESTÁTICO chamado boletosPendentes, inicializado com um
 *    array vazio.
 * 
 * 3. No final dos comandos construtor, se coloque no array de boletos
 *    pendentes
 * 
 * 4. Crie um método `pagar` que paga um determinado boleto:
 *    4.1. Se o boleto já estiver pago, lance um erro com a mensagem "O boleto
 *         já foi pago!"
 *    4.2. Troca o atributo `pago` para true
 *    4.3. Se remove do array de boletos pendentes
 *  
 */

class Boleto
{
    static _proximoID = 1;
    // Declare o array de boletos pendentes aqui
    static _boletosPendentes = [];

    constructor( valor )
    {
        if(this.valor <= 0) 
            {
                throw new Error("O valor do boleto precisa ser positivo!")
            }

        this.pago = false;
        this.valor = valor;
        this.id = Boleto._proximoID;

        Boleto._proximoID++;
        // Como eu me coloco nos boletos pendentes?

            //3.
        Boleto._boletosPendentes.push(this);
    }

    pagar()
    {
        if (this.pago)
            throw new Error('Esse boleto já foi pago')
        
    }


    // Hmmmmm
    toString()
    {
        let pagamento = "Pendente";
        if ( this.pago )
        {
            pagamento = "Pago";
        }
        return `Boleto ${ this.id }: [${ pagamento }] R$ ${this.valor.toFixed( 2 )}`;
    }

    pagar()
    {
        if (this.valor == false)
        {
            alert("Boleto pago!")
            this.valor == true;
        } //else (this.valor == true)
        // {
        //     alert('Esse boleto já está pago!')
        // }
    }
}

let boleto1 = new Boleto(1)
let boleto2 = new Boleto(4587)