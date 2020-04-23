let spaceshipName = prompt("Digite o nome da Nave.")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Oque deseja fazer? \n" + "1 - Acelerar a nave em 5km/s\n" + "2 - Desacelerar a nave em 5km/s\n" +
            "3 - Imprimir dados de bordo\n" + "4 - Sair do Programa")


    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity <= 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "Km/s")
}



do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
            break
        default:
            alert("Ok.\nEncerrando a navegação de bordo")
    }
}
while (chosenOption != "4")

// Funções Anonimas

/**
 let doubleSpeed = function (velocity) {
     return velocity * 2

 }
 let newVelocity = 40

 console.log(newVelocity)

 ou

 console.log(doubleSpeed(40))
 */

// Arrow Function

/** 
const doubleVelocity = "Function"(velocity) => {
    return velocity * 2
}

console.log(doubleVelocity(60))

'' podendo ser simplificada para ''

const doubleVelocity = velocity => velocity * 2

console.log(doubleVelocity(60))

*/

// High Order Function

//São funções recebem e retornam funções

/**
 function doubleVelocity (velocity, printer) {
     console.log("Estamos em doubleVelocity")
     let newVelocity = velocity * 2
     printer(newVelocity)
    return newVelocity
    }

     let anotherVelocity = doubleVelocity(60, function(velocity) {         *** Tambem seria usado (velocity) => {.......}
         console.log("Outra Velocidade: " + velocity)
     })



 */