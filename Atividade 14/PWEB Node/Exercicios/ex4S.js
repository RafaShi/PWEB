// EXEMPLO 4 - SINCRONO - FILESYSTEM PARA LER E IMPRIMIR

const fs = require("fs"); // carregando módulo FileSystem
const data = fs.readFileSync('file.txt'); // ler arquivo

// a execução é bloqueada aqui, até o arquivo ser lido

console.log(data.toString());