const readline = require('readlinesync');

const converterDolarParaReal = require('./conversor');

const rl = readline.createInterface({
    
});

rl.question('Digite o valor em dólar: ', (valor) => {
    const resultado = converterDolarParaReal(Number(valor));

    console.log(`O valor em reais é: R$ ${resultado.toFixed(2)}`);

    rl.close();
});

Recuperação Backend — JavaScript / Node.js
Exercício 01 — Produção diária de embalagens
Arquivo: rec01_producao.js
let caixasPorHora = 75;
let horasTrabalhadas = 8;

let total = caixasPorHora * horasTrabalhadas;

console.log("Caixas por hora:", caixasPorHora);
console.log("Horas trabalhadas:", horasTrabalhadas);
console.log("Total produzido:", total, "caixas");
Teste: 75 × 8 = 600 caixas
Exercício 02 — Custo de materiais para manutenção
Arquivo: rec02_materiais.js
const readlineSync = require('readline-sync');

let nomePeca = readlineSync.question("Digite o nome da peça: ");
let quantidade = Number(
    readlineSync.question("Digite a quantidade: ")
);
let precoUnitario = Number(
    readlineSync.question("Digite o preço unitário: ")
);

let total = quantidade * precoUnitario;

console.log("\n--- RESUMO DA COMPRA ---");
console.log("Peça:", nomePeca);
console.log("Quantidade:", quantidade);
console.log("Preço unitário: R$", precoUnitario.toFixed(2));
console.log("Valor total: R$", total.toFixed(2));
Teste: 12 × 18,50 = R$ 222,00
No terminal, digite 18.50 com ponto.
Exercício 03 — Verificação de nível de óleo
Arquivo: rec03_oleo.js
const readlineSync = require('readline-sync');

let nivel = Number(
    readlineSync.question("Digite o nível de óleo (%): ")
);

if (nivel >= 40 && nivel <= 80) {
    console.log("Nível informado:", nivel + "%");
    console.log("NÍVEL NORMAL");
} else {
    console.log("Nível informado:", nivel + "%");
    console.log("INSPEÇÃO NECESSÁRIA");
}
Regra:
40 até 80 → NÍVEL NORMAL
Abaixo de 40 ou acima de 80 → INSPEÇÃO NECESSÁRIA
Testes:
65 → NÍVEL NORMAL
25 → INSPEÇÃO NECESSÁRIA
Exercício 04 — Classificação de vibração
Arquivo: rec04_vibracao.js
const readlineSync = require('readline-sync');

let vibracao = Number(
    readlineSync.question("Digite o nível de vibração (mm/s): ")
);

if (vibracao <= 3) {
    console.log("Situação: ESTÁVEL");
} else if (vibracao <= 6) {
    console.log("Situação: ATENÇÃO");
} else {
    console.log("Situação: CRÍTICA");
}

console.log("Vibração informada:", vibracao, "mm/s");
Regra:
Até 3 → ESTÁVEL
Acima de 3 até 6 → ATENÇÃO
Acima de 6 → CRÍTICA
Testes:
2.5 → ESTÁVEL
4.8 → ATENÇÃO
7.2 → CRÍTICA
Comandos principais para lembrar
const readlineSync = require('readline-sync');
Entrada de texto:
let nome = readlineSync.question("Digite o nome: ");
Entrada de número:
let numero = Number(readlineSync.question("Digite um número: "));
Condição:
if (condicao) {
    
} else if (outraCondicao) {
    
} else {
    
}
Operadores importantes:
+    soma
-    subtração
*    multiplicação
/    divisão
>=   maior ou igual
<=   menor ou igual
>    maior
<    menor
==   igual
&&   e
||   ou
