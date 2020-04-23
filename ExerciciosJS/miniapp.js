let departureDateEntry = prompt("Digite a data de partida (Formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDifference = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if (chosenOption == "1") {
    let secondsofDeparture = Math.round(dateDifference / 1000)
    alert("Tempo de vôo: " + secondsofDeparture + " Segundos ")
} else if (chosenOption == "2") {
    let minutsofDeparture = Math.round(dateDifference / 1000 / 60)
    alert("Tempo de vôo " + secondsofDeparture + "Minutos")
} else if (chosenOption == "3") {
    let hoursofDeparture = Math.round(dateDifference / 1000 / 3600)
    alert("Tempo de vôo " + hoursofDeparture + "Horas")
} else if (chosenOption == "4") {
    let DaysofDeparture = Math.round(dateDifference / 1000 / 3600 / 24)
    alert("Tempo de vôo " + DaysofDeparture + "Dias")
} else {
    alert("Opção Inválida")
}