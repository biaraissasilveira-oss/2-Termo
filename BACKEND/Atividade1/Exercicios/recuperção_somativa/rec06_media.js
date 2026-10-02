const readline = require('readline-sync');

let somaTempos = 0;

for (let i = 1; i <= 6; i++) {
    const tempo = Number(
        readline.question(`Digite o tempo do atendimento ${i} (minutos): `)
    );

    somaTempos += tempo;
}

const media = somaTempos / 6;

console.log(`Soma dos tempos: ${somaTempos} minutos`);
console.log(`Média dos tempos: ${media} minutos`);