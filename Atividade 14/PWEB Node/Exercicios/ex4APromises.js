// EXEMPLO 4 - ASSINCRONO - COM CALLBACK

function parte1() {
    for (let i = 1; i <= 10; i++) {
        console.log("Primeira parte: " + i);
    }
}

setTimeout(parte1, 2000);

const fs = require('fs').promises;
fs.readFile('file.txt', 'utf8')
    .then(data => {
        const registros = data.split("\n");
        registros.forEach((registro, index) => {
            console.log(" Segunda parte: " + registro + " " + index);
        });
    })
    .catch(err => {
        console.error("Erro ao ler o arquivo: ", err);
    });