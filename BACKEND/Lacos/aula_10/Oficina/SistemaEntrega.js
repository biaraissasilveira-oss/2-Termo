const readline = require('readline-sync');

const {
    calcularBase,
    calcularSeguro,
    verificarPrazo
} = require('./calculadoraFrete');

const produto = readline.question('Digite o nome do produto: ');
const km = Number(readline.question('Digite a distancia da entrega em KM: '));
const valorCarga = Number(readline.question('Digite o valor total da carga: R$ '));

const freteBase = calcularBase(km);
const seguro = calcularSeguro(valorCarga);
const prazo = verificarPrazo(km);

const valorTotal = freteBase + seguro;

console.log(`RELATÓRIO DE POSTAGEM

Produto: ${produto}
Distância: ${km} km
Valor da carga: R$ ${valorCarga.toFixed(2)}
Frete base: R$ ${freteBase.toFixed(2)}
Seguro: R$ ${seguro.toFixed(2)}
Prazo de entrega: ${prazo}
VALOR TOTAL DO FRETE: R$ ${valorTotal.toFixed(2)}
`);
