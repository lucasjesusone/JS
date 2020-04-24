let spaceship = {
    name: "Fenix",
    crewQuantity: 8,
    Type: "Shield"
}


//console.log(spaceship.name) // Declarar uma variável apenas -- pode usar (spaceship.["name"]).

spaceship.isHitched = true
spaceship["battleLevel"] = 1200

console.log(spaceship["isHitched"])
console.log(spaceship.battleLevel)


// comparação entre array e objetos
/**
 Os OBJETOS são uma estrutura chave-valor 
 Ultilizamos OBJETOS quando precisamos mapear propriedades ou atributos.

 ARRAYS são uma estrutura de lista sequencial
 Ultilizamos ARRAY quando precisamos armazenar uma sequencia de elementos
 */

// Exemplos 
// Array dentro de Objeto
let spaceship = {
    name: "Alemã",
    Type: "Battlle",
    Trip: ["Ten Carlos", "Carlos", "Jose"]
}
spaceship.Trip.push("Fernando")

console.log(spaceship)

// Objeto dentro de Array

let spaceships = [
    { Name: "Radical", tripQuantity: 9 },
    { Name: "Estela", tripQuantity: 4 },
    { Name: "Ramena", tripQuantity: 5 }
]

console.log(spaceship[0].Name) // Temos q por o indice pq é array

// para percorrer o array todo 

spaceships.forEach(spaceship => {
    alert(spaceship.name + " tem " + spaceship.tripQuantity + " Tripulantes")
})


// objeto dentro de objeto

let spaceship = {
    name: "Javale",
    MaxTrip: 12,
    captain: {
        name: "Hugo Frotez",
        Age: 48
    }
}

console.log(spaceship.captain.name)


// adicionando funções aos objetos

let spaceship = {
    name: "James",
    type: "Defesa",
    maxTrip: 20,
    turnOn: function() {
            alert("Preparando Propulsão")
            alert("Ligando Computer de borto")
        } // anonima
}


spaceship.velocity = 0 // também poderia colocar velocity 0 dentro do objeto
spaceship.speedUp = function(acceleration) {
    this.velocity += acceleration // this significa estar relacionado ao spaceship da declaração let
}

console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)