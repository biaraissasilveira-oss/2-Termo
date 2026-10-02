const readline = require('readline-sync');

const produtosPorCiclo = Number(
    readline.question('Digite quantos produtos sao produzidos por ciclo: ')
);

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    const producaoAcumulada = produtosPorCiclo * ciclo;

    console.log(`Ciclo ${ciclo}: ${producaoAcumulada} produtos acumulados`);
}