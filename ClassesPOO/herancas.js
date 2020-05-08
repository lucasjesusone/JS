class Spaceship {
    constructor(name, maxTrip, maxRecommendedVelocity) {
        this.name = name
        this.maxTrip = maxTrip
        this.maxRecommendedVelocity = maxRecommendedVelocity
    }
    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (currentVelocity > maxRecommendedVelocity) {
            alert("VELOCIDADE MAXIMA ATINGIDA!!/nDiminua.")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity =
            alert("Parando nave de Batalha")
    }
}

class FieldSpaceship extends Spaceship {
    stop() {
        this.currentVelocity =
            alert("Parando nave de Batalha")
    }
}

let colossus = new BatlleSpaceship("Colossus", 10, 300)
let ramona = new FieldSpaceship("Ramona", 6, 100)

colossus.speedUp(200)
ramona.speedUp(230)

colossus.stop()
ramona.stop()


// Isso é basicamente uma herança, herdando do pai (Spaceship) para o filho (Field e Batlle)