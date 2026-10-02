const fs = require("fs");

const sensores = [
    {
        codigo: 1,
        tipo: "Temperatura",
        valor: 25,
        unidade: "°C",
        status: "Normal"
    },
    {
        codigo: 2,
        tipo: "Pressão",
        valor: 8,
        unidade: "bar",
        status: "Normal"
    },
    {
        codigo: 3,
        tipo: "Umidade",
        valor: 85,
        unidade: "%",
        status: "Alerta"
    },
    {
        codigo: 4,
        tipo: "Vibração",
        valor: 12,
        unidade: "mm/s",
        status: "Alerta"
    },
    {
        codigo: 5,
        tipo: "Temperatura",
        valor: 30,
        unidade: "°C",
        status: "Normal"
    }
];

const dados = JSON.stringify(sensores, null, 2);

fs.writeFileSync("./monitoramento.json", dados);

console.log("Arquivo monitoramento.json criado com sucesso!");