// EXEMPLO CALLBACK 1

const prompt = require('prompt-sync');

function saudacao(nome) {
    console.log("Oie " + nome);
}

function entradaNome(callback) {
    let nome = prompt("Digite seu nome: ");
    callback(nome); // chamando a funcao callback (saudacao)
}

entradaNome(saudacao);