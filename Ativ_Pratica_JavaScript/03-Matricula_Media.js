const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alunos = []; // Array para armazenar os objetos dos alunos

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function avaliarAluno(media) {
  if (media > 7) {
    return 'Aprovado';
  } else if (media === 7) {
    return 'Em Recuperação';
  } else {
    return 'Reprovado';
  }
}

function adicionarAluno() {
  rl.question('Digite a matrícula do aluno: ', (matricula) => {
    rl.question('Digite a primeira nota: ', (nota1) => {
      rl.question('Digite a segunda nota: ', (nota2) => {
        const media = calcularMedia(parseFloat(nota1), parseFloat(nota2));
        const resultado = avaliarAluno(media);

        alunos.push({
          matricula,
          nota1,
          nota2,
          media,
          resultado
        });

        console.log(`Aluno ${matricula}: ${resultado}`);

        rl.question('Deseja adicionar outro aluno? (s/n): ', (resposta) => {
          if (resposta.toLowerCase() === 's') {
            adicionarAluno();
          } else {
            calcularMediaGeral();
            rl.close();
          }
        });
      });
    });
  });
}

function calcularMediaGeral() {
  if (alunos.length === 0) {
    console.log('Nenhum aluno cadastrado.');
    return;
  }

  const somaDasMedias = alunos.reduce((soma, aluno) => soma + aluno.media, 0);
  const mediaGeral = somaDasMedias / alunos.length;
  console.log(`A média geral dos alunos é: ${mediaGeral.toFixed(2)}`);
}

adicionarAluno();