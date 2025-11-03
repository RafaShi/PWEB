// função construtora do retângulo
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    }
}

var base = parseFloat(prompt("Digite a base do retângulo: "));
var altura = parseFloat(prompt("Digite a altura do retângulo: "));
var ret = new Retangulo(base, altura);

alert("A área do retângulo é: " + ret.calcularArea());

// classe base Conta
class Conta {
    constructor(nome, banco, numeroConta, saldo) {
        this._nome = nome;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }

    get banco() {
        return this._banco;
    }
    set banco(valor) {
        this._banco = valor;
    }

    get numeroConta() {
        return this._numeroConta;
    }
    set numeroConta(valor) {
        this._numeroConta = valor;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
}

// classe Corrente (herança)
class Corrente extends Conta {
    constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
        super(nome, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

// classe Poupança (herança)
class Poupanca extends Conta {
    constructor(nome, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nome, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }
    set juros(valor) {
        this._juros = valor;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }
    set dataVencimento(valor) {
        this._dataVencimento = valor;
    }
}

// Criar objeto Corrente
var nomeC = prompt("Digite o nome do correntista da Conta Corrente:");
var bancoC = prompt("Digite o nome do banco:");
var numeroC = prompt("Digite o número da conta:");
var saldoC = parseFloat(prompt("Digite o saldo:"));
var saldoEsp = parseFloat(prompt("Digite o saldo especial:"));

var contaCorrente = new Corrente(nomeC, bancoC, numeroC, saldoC, saldoEsp);

// Criar objeto Poupança
var nomeP = prompt("Digite o nome do correntista da Conta Poupança:");
var bancoP = prompt("Digite o nome do banco:");
var numeroP = prompt("Digite o número da conta:");
var saldoP = parseFloat(prompt("Digite o saldo:"));
var jurosP = parseFloat(prompt("Digite os juros (%):"));
var dataVenc = prompt("Digite a data de vencimento:");

var contaPoupanca = new Poupanca(nomeP, bancoP, numeroP, saldoP, jurosP, dataVenc);

// Exibir resultados
alert(
    "CONTA CORRENTE\n" +
    "Nome: " + contaCorrente.nome +
    "\nBanco: " + contaCorrente.banco +
    "\nNúmero: " + contaCorrente.numeroConta +
    "\nSaldo: R$" + contaCorrente.saldo.toFixed(2) +
    "\nSaldo Especial: R$" + contaCorrente.saldoEspecial.toFixed(2)
);

alert(
    "CONTA POUPANÇA\n" +
    "Nome: " + contaPoupanca.nome +
    "\nBanco: " + contaPoupanca.banco +
    "\nNúmero: " + contaPoupanca.numeroConta +
    "\nSaldo: R$" + contaPoupanca.saldo.toFixed(2) +
    "\nJuros: " + contaPoupanca.juros + "%" +
    "\nData de Vencimento: " + contaPoupanca.dataVencimento
);
