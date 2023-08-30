let valorInicial = Number(prompt("Qual valor você deseja investir?"));
let taxaDeJuros = Number(prompt("Qual será o valor da taxa de juros?"));
let duracaoDoInvestimento = Number(
  prompt("Por quantos anos gostaria de manter o investimento?")
);

let valorFinal =
  valorInicial * (1 + duracaoDoInvestimento) ** (taxaDeJuros / 100);

alert("O valor final do seu investimento será: R$ " + valorFinal.toFixed(2));
