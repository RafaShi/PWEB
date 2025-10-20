document.addEventListener("DOMContentLoaded", function () {

    const MOVIMENTOS = ["pedra", "papel", "tesoura"];
    let pontuacaoJogador = 0;
    let pontuacaoComputador = 0;

    const resultadoEl = document.getElementById("result");
    const registroEl = document.getElementById("log");
    const resetBtn = document.getElementById("reset");
    const autoBtn = document.getElementById("auto");

    function escolhaComputador() {
        const passo = 0.99 / 3;
        const r = Math.random();
        if (r < passo) return "pedra";
        else if (r < 2 * passo) return "papel";
        else return "tesoura";
    }

    function decidir(jogador, computador) {
        if (jogador === computador) return 0;
        if (
            (jogador === "pedra" && computador === "tesoura") ||
            (jogador === "tesoura" && computador === "papel") ||
            (jogador === "papel" && computador === "pedra")
        ) return 1;
        return -1;
    }

    function atualizarInterface(jogador, computador, resultado) {
        if (resultado === 1) {
            pontuacaoJogador++;
            resultadoEl.textContent = `Você venceu! ${jogador} vence ${computador}.`;
        } else if (resultado === -1) {
            pontuacaoComputador++;
            resultadoEl.textContent = `Computador venceu! ${computador} vence ${jogador}.`;
        } else {
            resultadoEl.textContent = `Empate! Ambos escolheram ${jogador}.`;
        }


    }

    function jogar(escolhaJogador) {
        const escolhaComput = escolhaComputador();
        const resultado = decidir(escolhaJogador, escolhaComput);
        atualizarInterface(escolhaJogador, escolhaComput, resultado);
    }

    // Eventos de clique nos botões
    document.querySelectorAll("button.opcao").forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault(); // evita reload
            jogar(botao.dataset.move);
        });
    });

    // Botão iniciar
    resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        pontuacaoJogador = 0;
        pontuacaoComputador = 0;
        resultadoEl.textContent = "Faça sua escolha para começar.";
        registroEl.textContent = "Dica: pressione P (Pedra), A (Papel), T (Tesoura)";
    });

    // Botão jogar automático
    autoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        for (let i = 0; i < 5; i++) {
            const jogada = MOVIMENTOS[Math.floor(Math.random() * MOVIMENTOS.length)];
            jogar(jogada);
        }
    });

    // Atalhos do teclado
    window.addEventListener("keydown", (ev) => {
        const tecla = ev.key.toLowerCase();
        if (tecla == "p" || "P") jogar("pedra");
        if (tecla == "a" || "A") jogar("papel");
        if (tecla == "t" || "T") jogar("tesoura");
    });

    // Inicializa dica
    registroEl.textContent = "Dica: pressione P (Pedra), A (Papel), T (Tesoura)";

});
