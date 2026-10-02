const fs = require("fs");

if (fs.existsSync("./equipamentos.json")) {

    const dados = fs.readFileSync("./equipamentos.json", "utf-8");

    const equipamentos = JSON.parse(dados);

    for (const equipamento of equipamentos) {

        const status = equipamento.operacional ? "OPERACIONAL" : "PARADA";

        console.log(`Código: ${equipamento.codigo}`);
        console.log(`Equipamento: ${equipamento.nome}`);
        console.log(`Setor: ${equipamento.setor}`);
        console.log(`Status: ${status}`);
        console.log("--------------------");
    }

} else {
    console.log("Arquivo equipamentos.json não encontrado.");
}