var aluno1 = new Object();
//usando object
aluno1.ra = "00001234";
aluno1.nome = "Filipe";
alert(`ra=${aluno1.ra} nome=${aluno1.nome}`);

var aluno2 = {}; //usando{}
aluno2.ra = "1234";
aluno2["nome"] = "Rafaela";
alert("ra=" + aluno2.ra + " nome=" + aluno2.nome);
aluno2["email do aluno"] = "rafaela@gmail.com";
alert(aluno2["email do aluno"]);

var aluno3 = { //literal
    ra: "123456",
    nome: "Marcos", //vírgula opcional
}
alert("ra=" + aluno3.ra + " nome=" + aluno3.nome);

// usando fução construtora
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome
    this.MostraDados = function () {
        return "ra=" + this.ra + " nome=" + this.nome;
    }
}

var aluno4 = new Aluno("123", "Vinicius");
alert(aluno4.MostraDados());
alert(aluno4.nome);


// função construtora sem parâmetros
function Aluno2() {
    var ra; //encapsulado escondido
    var nome;
    this.setRa = function (value) {
        this.ra = value;
    }
    this.getRa = function () {
        return this.ra;
    }

    this.setNome = function (value) {
        this.nome = value;
    }
    this.getNome = function () {
        return this.nome;
    }
}

var aluno6 = new Aluno2();
aluno6.setNome("Nicolas");
aluno6.setRa("234");
alert("ra=" + aluno6.getRa() + " nome=" + aluno6.getNome());

//herança
function AlunoADS() {
    var numLab;
    this.setnumLab = function (value) {
        this.numLab = value;
    }
    this.getnumLab = function () {
        return this.numLab;
    }
}
//herança
AlunoADS.prototype = new Aluno2();
var aluno7 = new AlunoADS;
aluno7.setNome("Evandro");
aluno7.setRa("123");
aluno7.setnumLab(5);
alert(aluno7.getNome() + " " + aluno7.getnumLab());

// uasndo class
class Aluno1 {
    constructor() {
        this._ra;
        this._nome;
    }
    setNome(value) {
        this._nome = value;
    }

    getNome() {
        return this._nome;
    }
    setRa(value) {
        this._ra = value;
    }
    getRa() {
        return this._ra;
    }
}
var objAluno = new Aluno1();
objAluno.setNome("Renan");
objAluno.setRa('123');
alert(`nome=${objAluno.getNome()} ra=${objAluno.getRa()}`);

//herança
class AlunoADS1 extends Aluno1{
    constructor(){
        // super chama o construtor da classe pai
        super();
        this._numLab;
    }
    setNumLab(value){
        this._numLab = value;
    }
    getNumLab(){
        return this._numLab;
    }
}
var objAlunoADS = new AlunoADS1();
objAlunoADS.setNome("Andreas");
objAlunoADS.setRa("123");
objAlunoADS.setNumLab(6);
alert(`nome=${objAlunoADS.getNome()} ra=${objAlunoADS.getRa()} numlab=${objAlunoADS.getNumLab()}`);