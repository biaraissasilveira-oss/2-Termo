const entrada = require ('readline-sync');

// Buscando as ferramentas no arquivo funcoesOficina.js
//o './' siguinifica "nesta mesma pasta"
const oficina = require ('./funcoes_oficina');

console.log("=== SISTEMA DE GESTÃO DE OFICINA ===");

const peca = entrada. questionFloat("preco da peca : R$");
const horas = entrada.questionFloat("Horas de serviço:");
const tempoUso = entrada.questionFloat("Meses des o utimo conserto:");

// Usamos o nome 'Oficina'(que damos no require) seguido do ponto.
const totalBruto = oficina.calcularOrcamento(peca,horas);
const statusGarantia = oficina.verificarGarantia(tempoUso);
const totalComDesconto = oficina.aplicadorDesconto(totalBruto);

console.log("\n --- Relatorio final ---");
console.log(`Orcamento sem desconto: R$ ${totalBruto.toFixed(2) }`);
console.log(`Orcamento com desconto: R$ ${totalComDesconto.toFixed(2) }`);
console .log(`status do veiculo: ${statusGarantia}`);