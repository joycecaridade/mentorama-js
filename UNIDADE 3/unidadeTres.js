let operacao = prompt(
  "Bem vindo(a) ao Sistema de Compras! O que gostaria de fazer em nosso site? (1 - Vender um produto, 2 - Sair do sistema)"
);
let produtosDisponiveis = ["Videogame", "Computador", "Celular", "Tablet"];

switch (operacao) {
  case "1":
    var produto = prompt("Qual produto será vendido?");
    console.log("Produtos disponíveis para venda:", produtosDisponiveis);
    var precoDoProduto = Number(prompt(`Qual será o preço do ${produto}?`));
    var quantidadeDeProdutos = Number(
      prompt(`Informe a quantidade de produtos que deseja vender:`)
    );

    if (produtosDisponiveis.includes(produto)) {
      let valorFinal = precoDoProduto * quantidadeDeProdutos;

      if (produto === "Tablet" || produto === "Videogame") {
        console.log(`O valor total da sua venda será R$ ${valorFinal}!`);
      } else {
        let desconto = 15;
        let valorComDesconto = valorFinal * (desconto / 100);
        console.log(
          `O valor total da sua venda com desconto será de R$
          ${valorComDesconto}!`
        );
      }
    } else {
      alert("Operação inválida ou inexistente 👎");
    }
    break;

  case "2":
    alert("Esperamos vê-lo novamente 😊");
    break;
}
