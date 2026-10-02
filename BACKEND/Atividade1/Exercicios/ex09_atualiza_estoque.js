const fs = require("fs");
const readline = require("readline-sync");

const dados = fs.readFileSync("./materiais.json", "utf-8");

const materiais = JSON.parse(dados);

const codigo = Number(readline.question("Informe o código do material: "));

const material = materiais.find(item => item.codigo === codigo);

if (!material) {
    console.log("Material não encontrado.");
} else {
    console.log(`Material: ${material.descricao}`);
    console.log(`Quantidade atual: ${material.quantidade}`);

    const novaQuantidade = Number(
        readline.question("Informe a nova quantidade: ")
    );

    material.quantidade = novaQuantidade;

    fs.writeFileSync(
        "./materiais_backup.json",
        JSON.stringify(materiais, null, 2)
    );

    fs.writeFileSync(
        "./materiais.json",
        JSON.stringify(materiais, null, 2)
    );

    console.log("Estoque atualizado com sucesso!");
}