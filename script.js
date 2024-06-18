class Emprestimo {
	constructor(valorTotal, quantidadeParcelas) {
		this.valorTotal = parseFloat(valorTotal);
		this.quantidadeParcelas = parseInt(quantidadeParcelas);
		this.resultDiv = document.getElementById("result");
		this.parcelas = [];
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

		this.parcelas = [];

		for (let i = 1; i <= this.quantidadeParcelas; i++) {
			this.parcelas.push(parcelaAtual.toFixed(2));
			this.resultDiv.innerHTML += `<p>Parcela ${i}: R$${parcelaAtual.toFixed(
				2
			)}</p>`;
			parcelaAtual -= decremento;
		}

		this.exibirResultadosAdicionais();
	}

	calcularSomaParcelas() {
		return this.parcelas.reduce((acc, parcela) => acc + parseFloat(parcela), 0);
	}

	calcularMediaParcelas() {
		return this.calcularSomaParcelas() / this.parcelas.length;
	}

	exibirResultadosAdicionais() {
		const somaParcelas = this.calcularSomaParcelas();
		const mediaParcelas = this.calcularMediaParcelas();
		this.resultDiv.innerHTML += `<p>Soma das Parcelas: R$${somaParcelas.toFixed(
			2
		)}</p>`;
		this.resultDiv.innerHTML += `<p>Média das Parcelas: R$${mediaParcelas.toFixed(
			2
		)}</p>`;
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
