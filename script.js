class Emprestimo {
	constructor(valorTotal, quantidadeParcelas) {
		this.valorTotal = parseFloat(valorTotal);
		this.quantidadeParcelas = parseInt(quantidadeParcelas);
		this.resultDiv = document.getElementById("result");
	}

	validarEntrada() {
		if (
			isNaN(this.valorTotal) ||
			isNaN(this.quantidadeParcelas) ||
			this.valorTotal <= 0 ||
			this.quantidadeParcelas <= 0
		) {
			this.resultDiv.innerHTML = "<p>Por favor, digite valores válidos.</p>";
			return false;
		}
		return true;
	}

	calcularParcelas() {
		if (!this.validarEntrada()) {
			return;
		}

		this.resultDiv.innerHTML = "<h2>Valores das Parcelas Decrescentes:</h2>";
		let parcelaAtual = this.valorTotal / this.quantidadeParcelas;
		const decremento = parcelaAtual / this.quantidadeParcelas;

		for (let i = 1; i <= this.quantidadeParcelas; i++) {
			this.resultDiv.innerHTML += `<p>Parcela ${i}: R$${parcelaAtual.toFixed(
				2
			)}</p>`;
			parcelaAtual -= decremento;
		}
	}
}

const simulador = {
	calcularParcelas: function () {
		const valorTotal = document.getElementById("valorTotal").value;
		const quantidadeParcelas =
			document.getElementById("quantidadeParcelas").value;
		const emprestimo = new Emprestimo(valorTotal, quantidadeParcelas);
		emprestimo.calcularParcelas();
	},
};
