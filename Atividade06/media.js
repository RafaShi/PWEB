function calcularMedia() {
    let nome = document.getElementById("nome").value;

    // Converte para float
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let n4 = parseFloat(document.getElementById("nota4").value);

    let resultadoSpan = document.getElementById("resultado");

    if (nome.trim() === "" || isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        resultadoSpan.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    
    let media = (n1 + n2 + n3 + n4) / 4;

    // Mostra o resultado dentro do <span>
    resultadoSpan.textContent = media.toFixed(2);
}
