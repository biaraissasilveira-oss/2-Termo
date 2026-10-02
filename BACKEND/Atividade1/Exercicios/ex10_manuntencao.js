const fs = require("fs");
const readline = require("readline-sync");

try {
    // Verifica se o arquivo existe
    if (!fs.existsSync("./manutencoes.json")) {
        throw new Error("Arquivo manutencoes.json não encontrado.");
    }

    // Lê o arquivo
    const dados = fs.readFileSync("./manutencoes.json", "utf-8");

    // Converte JSON para array
    const manutencoes = JSON.parse(dados);

    console.log("=== RELATÓRIO DE MANUTENÇÃO ===");

    let totalManutencao = 0;

    // Lista todas as máquinas
    for (const manutencao of manutencoes) {

        const horasRestantes =
            manutencao.limiteManutencao - manutencao.horasUso;

        let status;

        if (horasRestantes <= 0 && !manutencao.manutencaoRealizada) {
            status = "MANUTENÇÃO NECESSÁRIA";
            totalManutencao++;
        } else {
            status = "NORMAL";
        }

        console.log(`ID: ${manutencao.id}`);
        console.log(`Máquina: ${manutencao.maquina}`);
        console.log(`Setor: ${manutencao.setor}`);
        console.log(`Horas de uso: ${manutencao.horasUso}`);
        console.log(`Horas restantes: ${horasRestantes}`);
        console.log(`Status: ${status}`);
        console.log(`Manutenção realizada: ${
            manutencao.manutencaoRealizada ? "SIM" : "NÃO"
        }`);
        console.log("--------------------");
    }

    console.log(
        `Total de equipamentos que precisam de manutenção: ${totalManutencao}`
    );

    // Solicita o ID
    const id = Number(
        readline.question("Informe o ID da máquina para registrar manutenção: ")
    );

    const maquina = manutencoes.find(item => item.id === id);

    if (!maquina) {
        throw new Error("Máquina não encontrada.");
    }

    console.log(`Máquina selecionada: ${maquina.maquina}`);

    const confirmar = readline.question(
        "Deseja registrar a manutenção realizada? (s/n): "
    );

    if (confirmar.toLowerCase() === "s") {

        // Cria o backup antes da alteração
        fs.writeFileSync(
            "./manutencoes_backup.json",
            JSON.stringify(manutencoes, null, 2)
        );

        // Altera o objeto
        maquina.manutencaoRealizada = true;

        // Salva o arquivo atualizado
        fs.writeFileSync(
            "./manutencoes.json",
            JSON.stringify(manutencoes, null, 2)
        );

        console.log("Manutenção registrada com sucesso!");
        console.log("Backup criado em manutencoes_backup.json");

    } else {
        console.log("Nenhuma alteração foi realizada.");
    }

} catch (erro) {
    console.log("ERRO:");
    console.log(erro.message);
}