// EXERCICIO 6 - MINI SERVIDOR

let http = require('http');
let server = http.createServer(function(req, res) {
    res.end("<html><body>Site da Fatec Sorocaba</body></html>");
});

server.listen(3000);

console.log("Servidor iniciado!");
console.log("Abra o navegar e digite: localhost:3000");