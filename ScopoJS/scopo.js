// USANDO SCOPE

let spaceshipName = "Fenix"

function changeSpaceshipName() {
    spaceshipName = "Elemental"
}

console.log(spaceshipName) || // para receber o nome anterior
    changeSpaceshipName()

console.log(spaceshipName) // Para receber o nome posterior a função executada

// FUNÇÃO UM POUCO MAIS AVANÇADA

function SetspaceshipDetails() {
    let velocity = 50
    if (velocity == 50) {
        velocity = 60
        var spaceshipName = "Elemental"
        let spaceshipType = "Discovery"
    }
    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)

}

setspaceshipDetails()

/**  vale ressaltar que a variavel LET não funcionará pois se trata de escopo de bloco.
Para a variavel var não existe escopo de bloco. */


// FUNÇÕES ANONIMAS 22/04