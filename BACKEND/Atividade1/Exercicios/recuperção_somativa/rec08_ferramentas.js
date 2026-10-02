const readline = require('readline-sync');

const ferramentas = [];

for (let i = 0; i < 4; i++) {
    const nome = readline.question(`Digite o nome da ferramenta ${i + 1}: `);
    const quantidade = Number(
        readline.question('Digite a quantidade disponivel: ')
    );
    const minimo = Number(
        readline.question('Digite a quantidade minima: ')
    );

    const ferramenta = {
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    };

    ferramentas.push(ferramenta);
}

console.log('\n--- CONTROLE DE FERRAMENTAS ---');

for (let i = 0; i < ferramentas.length; i++) {
    const ferramenta = ferramentas[i];

    let situacao;

    if (ferramenta.quantidade < ferramenta.minimo) {
        situacao = 'REPOR';
    } else {
        situacao = 'ESTOQUE SUFICIENTE';
    }

    console.log(`\nFerramenta: ${ferramenta.nome}`);
    console.log(`Quantidade: ${ferramenta.quantidade}`);
    console.log(`Mínimo: ${ferramenta.minimo}`);
    console.log(`Situação: ${situacao}`);
}