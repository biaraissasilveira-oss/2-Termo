const fs = require("fs");

const dados = fs.readFileSync("./materiais.json", "utf-8");

const materiais = JSON.parse(dados);

let totalUnidades = 0;
let valorTotal = 0;

console.log("=== ESTOQUE DE MATÉRIA-PRIMA ===");

for (const material of materiais) {
    const valorEstoque = material.quantidade * material.valorUnitario;

    console.log(`Descrição: ${material.descricao}`);
    console.log(`Quantidade: ${material.quantidade}`);
    console.log(`Valor unitário: R$ ${material.valorUnitario.toFixed(2)}`);
    console.log(`Valor em estoque: R$ ${valorEstoque.toFixed(2)}`);
    console.log("--------------------");

    totalUnidades += material.quantidade;
    valorTotal += valorEstoque;
}

console.log(`Quantidade de tipos de materiais cadastrados: ${materiais.length}`);
console.log(`Quantidade total de unidades: ${totalUnidades}`);
console.log(`Valor total do estoque: R$ ${valorTotal.toFixed(2)}`);