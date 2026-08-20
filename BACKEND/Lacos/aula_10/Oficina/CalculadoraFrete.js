function calcularBase(km) {
    return km * 2.10;
}

function calcularSeguro(valorCarga) {
    return valorCarga * 0.01;
}

function verificarPrazo(km) {
    if (km < 100) {
        return '1 dia útil';
    } else {
        return '3 a 5 dias úteis';
    }
}

// Testando as funções
const distancia = 150;
const valorCarga = 1000;

console.log('=== Calculadora de Frete ===');
console.log('Distância:', distancia, 'km');
console.log('Valor da carga: R$', valorCarga);
console.log('Frete base: R$', calcularBase(distancia));
console.log('Seguro: R$', calcularSeguro(valorCarga));
console.log('Prazo:', verificarPrazo(distancia));

// Exportando as funções
module.exports = {
    calcularBase,
    calcularSeguro,
    verificarPrazo
};
