const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o salário inicial do funcionário: ', (salarioInicial) => {
  // Convertendo a entrada para um número de ponto flutuante
  salarioInicial = parseFloat(salarioInicial);

  // Calculando o aumento de 20%
  const aumento = salarioInicial * 0.20;
  const salarioComAumento = salarioInicial + aumento;

  // Calculando o desconto do INSS (8%)
  const descontoINSS = salarioComAumento * 0.08;
  const salarioFinal = salarioComAumento - descontoINSS;

  // Exibindo os resultados
  console.log(`Salário inicial: R$ ${salarioInicial.toFixed(2)}`);
  console.log(`Salário com aumento de 20%: R$ ${salarioComAumento.toFixed(2)}`);
  console.log(`Desconto do INSS (8%): R$ ${descontoINSS.toFixed(2)}`);
  console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);

  rl.close();
});