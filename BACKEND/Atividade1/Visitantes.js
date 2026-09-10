const readlineSync = require('readline-sync');

const listaVisitantes = [];

let resposta = 's';

while (resposta.toLowerCase() === 's') {
    const nome = readlineSync.question('Digite o nome do visitante: ');
    const empresa = readlineSync.question('Digite a empresa: ');

    const visitante = {
        nome: nome,
        empresa: empresa
    };

    listaVisitantes.push(visitante);

    resposta = readlineSync.question(
        'Deseja cadastrar um novo visitante? (s/n) '
    );
}

console.log('\nLista de visitantes que entraram hoje:');
console.log(listaVisitantes);
