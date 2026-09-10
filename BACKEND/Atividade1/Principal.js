const readline = require('readline');

const sensor = require('./sensor');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a temperatura: ', (temperatura) => {
    rl.question('Digite a umidade: ', (umidade) => {

        const avisoTemperatura = sensor.checarTemperatura(Number(temperatura));
        const avisoUmidade = sensor.checarUmidade(Number(umidade));

        if (avisoTemperatura) {
            console.log(avisoTemperatura);
        }

        if (avisoUmidade) {
            console.log(avisoUmidade);
        }

        rl.close();
    });
});
