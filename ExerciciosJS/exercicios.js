let spaceshipName = prompt("Qual o nome da nave?")

let invertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    invertedName += spaceshipName[i]

}
alert("Nome Original da Nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)