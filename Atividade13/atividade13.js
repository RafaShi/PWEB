// Aula 6 pag 131

// Seleciona elementos

const imgJanela = document.getElementById("janela");
const titulo = document.getElementById("titulo");

// Caminhos das imagens

const imgFechada = "https://img.icons8.com/officel/80/closed-window.png";
const imgAberta = "https://img.icons8.com/officel/80/open-window.png";
const imgQuebrada = "./img/janelaQuebrada.png";

// Estado inicial

let quebrada = false;

// Quando o mouse passa sobre a imagem → abre a janela

imgJanela.addEventListener("mouseover", function () {
    if (!quebrada) {
        imgJanela.src = imgAberta;
        titulo.textContent = "Janela Aberta";
    }
});

// Quando o mouse sai da imagem → fecha a janela

imgJanela.addEventListener("mouseout", function () {
    if (!quebrada) {
        imgJanela.src = imgFechada;
        titulo.textContent = "Janela Fechada";
    }
});

// Quando clica na imagem → quebra a janela

imgJanela.addEventListener("click", function () {
    imgJanela.src = imgQuebrada;
    titulo.textContent = "Janela Quebrada";
    quebrada = true;
});
