const fs = require("fs");

const dados = fs.readFileSync("./equipamentos.json", "utf-8");

const equipamentos = JSON.parse(dados);

let totalParados = 0;

console.log("=== EQUIPAMENTOS PARADOS ===");

for (const equipamento of equipamentos) {

    if (!equipamento.operacional) {
        console.log(`${equipamento.nome} - ${equipamento.setor}`);
        totalParados++;
    }
}

console.log(`Total de equipamentos parados: ${totalParados}`);