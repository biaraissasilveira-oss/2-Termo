const readline = require('readline-sync');

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return 'EXCELENTE';
    } else if (percentual >= 75) {
        return 'ADEQUADO';
    } else {
        return 'REVISAR PROCESSO';
    }
}

const total = Number(
    readline.question('Digite a quantidade total de materia-prima: ')
);

const util = Number(
    readline.question('Digite a quantidade util de materia-prima: ')
);

const percentual = calcularAproveitamento(util, total);
const classificacao = classificarAproveitamento(percentual);

console.log('\n--- RELATÓRIO DE APROVEITAMENTO ---');
console.log(`Quantidade total: ${total}`);
console.log(`Quantidade útil: ${util}`);
console.log(`Percentual de aproveitamento: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);