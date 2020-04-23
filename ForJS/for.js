let spaceShip = prompt("Qual o nome da nave ?")

let charToReplace = prompt("Qual caracter deseja substituir?") // char para substituir

let replacementChar = prompt("Por qual caracter deseja substituir?") // usibstutuição de char

let newSpaceship = ""

for (let pos = 0; pos < spaceShip.length; pos = pos + 1) {
    if (spaceShip[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceShip[pos]
    }
}
alert("O novo nome da nave é " + newSpaceship)