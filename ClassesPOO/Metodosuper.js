class Spaceship {
    constructor(name, maxTrip, maxRecommendedVelocity) {
        this.name = name
        this.maxTrip = maxTrip
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }
    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert("VELOCIDADE MAXIMA ATINGIDA!!\nDiminua.")
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxTrip, maxRecommendedVelocity, maxLoadWeight) {
        super(name, maxTrip, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration) {
        acceleration /= 2
        alert("Incrementando velocidade em: " + acceleration + "Km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(220)