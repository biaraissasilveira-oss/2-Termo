const readlineSync = require('readline-sync');

const venda = require('./calculosVendas');

const nome = readlineSync.question('Digite o nome do cliente: ');
const preco = readlineSync.questionFloat('Digite o preco do produto: R$ ');
const qtd = readlineSync.questionInt('Digite a quantidade: ');

const total = venda.calcularTotal(preco, qtd);

const cupom = venda.gerarCupom(nome, total);

console.log('\n' + cupom);
