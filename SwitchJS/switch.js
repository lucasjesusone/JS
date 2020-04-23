 let distanceinLY = prompt("Digite a distância em anos-luz")

 let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parsec(pc)\n2. Unidade Astronômica (AU) " +
         "\n3. Kilômetros (km)\n\n(Digite o Número da Opção Desejada)") // Usando plus (+) somente para pular a linha

 let chosenUnity
 let convertedDistance

 switch (chosenOption) {
     case "1":
         chosenUnity = "Parsec"
         convertedDistance = distanceinLY * 0.306601
         break
     case "2":
         chosenUnity = "Unidade Astronômica"
         convertedDistance = distanceinLY * 63241.1
         break
     case "3":
         chosenUnity = "Kilômetros"
         convertedDistance = distanceinLY * 9.5 * Math.pow(10, 12)
         break
     default:
         chosenUnity = "Unidade não identificada"
         convertedDistance = "Conversão fora do escopo"
 }

 alert("Distância em anos-luz: " + distanceinLY + "\n" + chosenUnity + ": " + convertedDistance)