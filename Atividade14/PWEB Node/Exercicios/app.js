let app = require('./app/config/server'); // carregando servidor

let rotaHome = require('./app/routes/home'); // só está definindo as rotas

rotaHome(app); // está executando

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

let rotaCursos = require('./app/routes/cursos');
rotaCursos(app); // está executando 

let rotaProfessores = require('./app/routes/professores'); // só está definindo
rotaProfessores(app); // está executando

/* poderia executar assim também*/
/*
let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario')(app);
*/
app.listen(3000, function(){
 console.log("servidor iniciado");
});