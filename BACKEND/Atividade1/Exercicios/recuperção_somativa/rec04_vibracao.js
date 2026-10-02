const readline = require('readline-sync');

const vibracao = Number(readline.question('Digite o nivel de vibracao (mm/s): '));

if (vibracao <= 3) {
    console.log('Situação: ESTÁVEL');
} else if (vibracao <= 6) {
    console.log('Situação: ATENÇÃO');
} else {
    console.log('Situação: CRÍTICA');
}

console.log(`Valor informado: ${vibracao} mm/s`);