<<<<<<< HEAD
let truck = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerTruck() {
    truck.name = prompt("Informe o Modelo do Caminhão"),
        truck.type = prompt("Informe o Tipo do Caminhão"),
        truck.maxVelocity = Number(prompt("Informe a velocidade Maxima do Caminhão (km/s)"))
        // number("100") se converte em 100 numérico por causa da função Number
}

function accelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s) "))
    truck.speedUp(acceleration)
    if (truck.velocity > truck.maxVelocity) {
        alert("VELOCIDADE MAXIMA ULTRAPASSADA" +
            "\nVelocidade do Caminhão: " + truck.velocity + "Km/s" +
            "\nVelocidade Maxima do Caminhão: " + truck.maxVelocity + "km/s")
    }
}

function stop() {
    alert("Modelo do Caminhão: " + truck.name +
        "\nTipo do Caminhão: " + truck.type +
        "\nVelocidade do Caminhão: " + truck.velocity +
        "\nVelocidade Maxima do Caminhão: " + truck.maxVelocity)
    truck.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você Deseja:\n1- Acelerar\n2- Parar ")
        switch (chosenOption) {
            case "1":
                accelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção Inválida")
        }
    } while (chosenOption != "2") // Vai exibir o menu while a escolha for diferente de 2
}

registerTruck()
=======
let truck = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerTruck() {
    truck.name = prompt("Informe o Modelo do Caminhão"),
        truck.type = prompt("Informe o Tipo do Caminhão"),
        truck.maxVelocity = Number(prompt("Informe a velocidade Maxima do Caminhão (km/s)"))
        // number("100") se converte em 100 numérico por causa da função Number
}

function accelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s) "))
    truck.speedUp(acceleration)
    if (truck.velocity > truck.maxVelocity) {
        alert("VELOCIDADE MAXIMA ULTRAPASSADA" +
            "\nVelocidade do Caminhão: " + truck.velocity + "Km/s" +
            "\nVelocidade Maxima do Caminhão: " + truck.maxVelocity + "km/s")
    }
}

function stop() {
    alert("Modelo do Caminhão: " + truck.name +
        "\nTipo do Caminhão: " + truck.type +
        "\nVelocidade do Caminhão: " + truck.velocity +
        "\nVelocidade Maxima do Caminhão: " + truck.maxVelocity)
    truck.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você Deseja:\n1- Acelerar\n2- Parar ")
        switch (chosenOption) {
            case "1":
                accelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção Inválida")
        }
    } while (chosenOption != "2") // Vai exibir o menu while a escolha for diferente de 2
}

registerTruck()
>>>>>>> a880fee1fbc801110f3fae58a6c58b53f219dcfc
showMenu()