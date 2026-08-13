const entrada = requiere('readline-sync');
console.log("=== SISTEMA DE CONTROLE DE QUALIDADE - PESAGEM ===");

//1. Definição de variaveis 
const pesos = []; // Array para guaradar p historico do (dia 4)
let somaTotal = 0; // Acumulador(dia 3)

const qtdpecas = entrada. questionInt("Quantas pecas deseja avaliar? ");

//2. Loop para coletar dados 
for (let i= 0; i < qtdpecas; i++) {
    let peso = entrada.questionFloat('Digite o peso da peca ${i + 1 } (kg): ');

    pesos.push(peso);    //Guaradar no prédio/Array
    somaTotal += peso;   //soma no cofre/Acumulador

}

// 3. Cálculos 
const media = somaTotal / qtdpecas;

//4. Exibição do Relatorio 
console.log("\n---RELATORIO DA AUDITORIA ---");
console.log('pesos registrados: [ ${pesos.join(" kg | ")} kg ]');
console.log('Media de peso do lote: ${Media.ToFixed(2)} kg');

// 5. Decição(Logica combinada da semana 2)
if (media >= 4.8 && media <= 5.2) {
    console.log("STATUS FINAL: LOTE Aprovado!");
 } else{
        console.log("Status Final: Lote Aprovado (Fora do padrão)");
    }    