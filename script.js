function calcularParcelas() {
	let valorTotal = parseFloat(document.getElementById("valorTotal").value);
	let quantidadeParcelas = parseInt(
		document.getElementById("quantidadeParcelas").value
	);
	let resultDiv = document.getElementById("result");

	if (
		isNaN(valorTotal) ||
		isNaN(quantidadeParcelas) ||
		valorTotal <= 0 ||
		quantidadeParcelas <= 0
	) {
		resultDiv.innerHTML = "<p>Por favor, digite valores válidos.</p>";
		return;
	}

	resultDiv.innerHTML = "<h2>Valores das Parcelas Decrescentes:</h2>";

	let parcelaAtual = valorTotal / quantidadeParcelas;
	let decremento = parcelaAtual / quantidadeParcelas;

	for (let i = 1; i <= quantidadeParcelas; i++) {
		resultDiv.innerHTML += `<p>Parcela ${i}: R$${parcelaAtual.toFixed(2)}</p>`;
		parcelaAtual -= decremento;
	}
}
