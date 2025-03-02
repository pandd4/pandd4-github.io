function calcular() {
    let valor = parseFloat(document.getElementById("valor").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let parcelas = parseInt(document.getElementById("parcelas").value);

    if (isNaN(valor) || isNaN(taxa) || isNaN(parcelas) || valor <= 0 || taxa < 0 || parcelas <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos!";
        return;
    }

    let parcela = valor * (taxa * Math.pow(1 + taxa, parcelas)) / (Math.pow(1 + taxa, parcelas) - 1);
    parcela = parcela.toFixed(2);

    document.getElementById("resultado").innerText = `Valor da Parcela: R$ ${parcela}`;
}
