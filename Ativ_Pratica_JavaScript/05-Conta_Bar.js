const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o valor total da conta: R$ ', (valorTotal) => {
    // Converte o valor para float
    let total = parseFloat(valorTotal);

    // Calcula quanto Carlos e André devem pagar
    let parteCarlosEAndre = Math.floor(total / 3); // Carlos e André pagam sem centavos

    // Calcula quanto Felipe deve pagar (restante)
    let parteFelipe = total - (parteCarlosEAndre * 2); // Felipe paga o restante

    // Exibe os resultados
    console.log(`Carlos deve pagar: R$ ${parteCarlosEAndre.toFixed(2)}`);
    console.log(`André deve pagar: R$ ${parteCarlosEAndre.toFixed(2)}`);
    console.log(`Felipe deve pagar: R$ ${parteFelipe.toFixed(2)}`);

    readline.close();
});
