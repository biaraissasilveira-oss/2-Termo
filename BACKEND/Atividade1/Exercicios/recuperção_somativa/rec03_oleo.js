const readline = require('readline-sync');

const nivelOleo = Number(readline.question('Digite o nivel de oleo (%): '));

if (nivelOleo >= 40 && nivelOleo <= 80) {
    console.log('NÍVEL NORMAL');
} else {
    console.log('INSPEÇÃO NECESSÁRIA');
}

console.log(`Valor informado: ${nivelOleo}%`);