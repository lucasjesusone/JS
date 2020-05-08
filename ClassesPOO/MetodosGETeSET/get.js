 /// ULTILIZADO PARA RETORNAR O VALOR COMO UMA VARIAVEL

 class ResourceProcessStation {
     constructor(name, monthlyProcessedLoad) {
         this.name = name
         this.monthlyProcessedLoad = monthlyProcessedLoad
     }

     get weeklyProcessedLoad() {
         return this.monthlyProcessedLoad / 4
     }

 }

 let resourceProcessor = new ResourceProcessStation("James", 1000)

 console.log(resourceProcessor.weeklyProcessedLoad)

 //-----------------------------------------------------------------------------------// Confirmando se esta realmente obtendo (GET)

 resourceProcessor.monthlyProcessedLoad = 6000

 console.log(resourceProcessor.weeklyProcessedLoad)