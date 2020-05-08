class Spaceship {
    static get deceleration() {
        return 0.15 //retornar 15 por cento da aceleração.
    }
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.deceleration))
    }
}

let spaceship = new Spaceship("Kratus")

spaceship.speedUp(220)

console.log(spaceship)