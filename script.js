function calcular() {
    let valor = parseFloat(document.getElementById("valor").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let parcelas = parseInt(document.getElementById("parcelas").value);

    if (isNaN(valor) || isNaN(taxa) || isNaN(parcelas) || parcelas <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Fórmula de juros compostos: M = P * [(1 + i)^n]
    let montante = valor * Math.pow((1 + taxa), parcelas);
    let parcelaMensal = montante / parcelas;

    document.getElementById("resultado").innerText = `R$ ${parcelaMensal.toFixed(2)}`;
}
