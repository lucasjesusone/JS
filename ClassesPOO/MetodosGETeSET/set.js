class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }
    set velocity(newVelocity) {
        if (newVelocity > 120) { //SETAR ESSA VELOCIDADE 120.
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transporter")

spaceship.velocity = 130

console.log(spaceship)