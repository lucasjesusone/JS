// METODOS ESTATICOS SÃO CHAMADOS DIRETO NA CLASSE, QUANDO QUEREMOS TER ALGO QUE NÃO SE ALTERARÁ INDEPENDENTE DA INSTANCIA DO OBJETO.

class ResoucerProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    static calculateProcessingInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours //sendo 720 carga horaria de um mes
    }
}
let totalProcessing = ResoucerProcessorStation.calculateProcessingInHours(500, 8) /// 500 processamento mensal e quantos produziu em 8 horas

console.log(totalProcessing)