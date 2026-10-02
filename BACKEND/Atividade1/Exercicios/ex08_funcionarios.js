const fs = require("fs");
const readline = require("readline-sync");

const dados = fs.readFileSync("./funcionarios.json", "utf-8");

const funcionarios = JSON.parse(dados);

const matricula = Number(readline.question("Informe a matrícula: "));

let funcionarioEncontrado = null;

for (const funcionario of funcionarios) {
    if (funcionario.matricula === matricula) {
        funcionarioEncontrado = funcionario;
        break;
    }
}

if (funcionarioEncontrado) {
    console.log("Funcionário encontrado!");
    console.log(`Nome: ${funcionarioEncontrado.nome}`);
    console.log(`Setor: ${funcionarioEncontrado.setor}`);
    console.log(`Cargo: ${funcionarioEncontrado.cargo}`);
} else {
    console.log("Funcionário não encontrado.");
}