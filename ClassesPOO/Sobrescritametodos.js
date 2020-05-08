class Spaceship {
    constructor(name, maxTrip, maxRecommendedVelocity) {
        this.name = name
        this.maxTrip = maxTrip
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }
    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (currentVelocity > maxRecommendedVelocity) {
            alert("VELOCIDADE MAXIMA ATINGIDA!!/nDiminua.")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert("Naves de transportem só aumenta a velocidade em 1km/s.")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 5, 101)
transportSpaceship.speedUp();

console.log(transportSpaceship)

//SOBREESCRITA DE METODOS