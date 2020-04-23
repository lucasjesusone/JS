function slowDown(velocity, printer) {
    let deceleration = 10

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Nave parada. Comportas podem ser abertas")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, velocity => { // Usei arrow function, mas poderia ser substituido por function(velocity)
    console.log("Velocidade Atual: " + velocity)
})