const readline = require('readline-sync');

const setores = [];

for (let i = 0; i < 6; i++) {
    const nomeSetor = readline.question(`Digite o nome do setor ${i + 1}: `);
    setores.push(nomeSetor);
}

console.log('\n--- SETORES DA FÁBRICA ---');

for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}
