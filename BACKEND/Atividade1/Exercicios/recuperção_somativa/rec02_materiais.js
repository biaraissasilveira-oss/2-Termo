const readline = require('readline-sync');

const nomePeca = readline.question('Digite o nome da peca: ');
const quantidade = Number(readline.question('Digite a quantidade comprada: '));
const precoUnitario = Number(readline.question('Digite o preco unitario: '));

const valorTotal = quantidade * precoUnitario;

console.log('\n--- RESUMO DA COMPRA ---');
console.log(`Nome da peca: ${nomePeca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preco unitario: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);