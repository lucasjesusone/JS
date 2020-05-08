class TransportSpaceship extends Spaceship {
    constructor(name, crewQuantity, sitsQuantity) { //Sits significa lugares
        super(name, crewQuantity)
        this.sitsQuantity = sitsQuantity
    }
}