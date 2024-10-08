const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularValorTotal() {
  rl.question('Digite a quantidade de camisetas pequenas: ', (qtdPequenas) => {
    rl.question('Digite a quantidade de camisetas médias: ', (qtdMedias) => {
      rl.question('Digite a quantidade de camisetas grandes: ', (qtdGrandes) => {
        // Convertendo as entradas para números
        const qtdPequenasNum = parseInt(qtdPequenas);
        const qtdMediasNum = parseInt(qtdMedias);
        const qtdGrandesNum = parseInt(qtdGrandes);

        // Calculando o valor total
        const valorTotal = (qtdPequenasNum * 10) + (qtdMediasNum * 12) + (qtdGrandesNum * 15);

        console.log(`O valor total da venda é: R$ ${valorTotal.toFixed(2)}`);
        rl.close();
      });
    });
  });
}

calcularValorTotal();