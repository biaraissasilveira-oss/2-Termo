function calcularOrcamento(precoPeca,horas_trabalho) {
    const valorHora = 50.00;
    const totalMaoDeObra = horas_trabalho * valorHora;
    return precoPeca + totalMaoDeObra;
}

function verificarGarantia(meses) {
    if (meses <= 3) {
        return  "Dentro da garantia";
    } else {
        return "Garantia expirada";
     }
}

function aplicarDesconto(valorTotal) {
    return valorTotal  * 0.95;
    
}
 module.exports = {
    calcularOrcamento,
    verificarGarantia,
    aplicarDesconto

 }