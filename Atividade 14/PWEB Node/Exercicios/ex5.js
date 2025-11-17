// EXEMPLO 5 - EVENTO DO LADO DO SERVIDOR

let eventos = require('events');
let EmissorEventos = eventos.EventEmitter;
let ee = new EmissorEventos();

ee.on("dados", function(fecha) {
    console.log(fecha);
});

ee.emit("dados", "Primeira vez" + Date.now());

setInterval(function() {
    ee.emit("dados", Date.now());
}, 500);