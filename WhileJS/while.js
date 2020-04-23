let warnCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da Nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while (chosenOption == "1") {
    warnCount += 1
    chosenOption = prompt("Deseja Realizar mais uma dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de Dobras: " + warnCount)