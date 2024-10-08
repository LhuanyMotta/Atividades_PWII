// Importa o módulo 'readline' para entrada de dados do terminal
const readline = require('readline');

// Cria a interface para leitura de dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a média
function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

// Array para armazenar as notas
const notas = [];

// Função para perguntar as notas
function perguntarNota(indice) {
  if (indice < 4) {
    rl.question(`Digite a nota ${indice + 1}: `, (resposta) => {
      notas.push(parseFloat(resposta));
      perguntarNota(indice + 1);
    });
  } else {
    const media = calcularMedia(notas);
    console.log(`A média do aluno é: ${media.toFixed(2)}`);
    rl.close();
  }
}

// Inicia a coleta das notas
perguntarNota(0);