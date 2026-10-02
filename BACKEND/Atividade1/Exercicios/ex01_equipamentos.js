const fs = require("fs");

const equipamentos = [
    {
        codigo: 1,
        nome: "Computador",
        setor: "Administrativo",
        operacional: true
    },
    {
        codigo: 2,
        nome: "Impressora",
        setor: "Administrativo",
        operacional: true
    },
    {
        codigo: 3,
        nome: "Empilhadeira",
        setor: "Estoque",
        operacional: false
    }
];

const dados = JSON.stringify(equipamentos, null, 2);

fs.writeFileSync("./equipamentos.json", dados);

console.log("Arquivo equipamentos.json criado com sucesso!");
