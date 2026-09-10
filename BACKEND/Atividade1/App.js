const readline = require('readlinesync');

const converterDolarParaReal = require('./conversor');

const rl = readline.createInterface({
    
});

rl.question('Digite o valor em dólar: ', (valor) => {
    const resultado = converterDolarParaReal(Number(valor));

    console.log(`O valor em reais é: R$ ${resultado.toFixed(2)}`);

    rl.close();
});
