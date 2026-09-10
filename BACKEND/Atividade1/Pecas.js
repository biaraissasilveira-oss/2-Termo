const readlineSync = require('readline-sync');

const pecasDefeituosas = [];

const quantidade = readlineSync.questionInt(
    'Quantas pecas com defeito foram encontradas? '
);

for (let i = 0; i < quantidade; i++) {
    const numeroSerie = readlineSync.question(
        `Digite o numero de serie da peca ${i + 1}: `
    );

    pecasDefeituosas.push(numeroSerie);
}

console.log(
    `Total de pecas: ${pecasDefeituosas.length} - Numeros de serie: ${pecasDefeituosas.join(', ')}`
);
