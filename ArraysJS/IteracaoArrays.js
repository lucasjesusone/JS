// FOR EACH
/** 
let spaceshipNames = ["Darwin", "Leter", "Ramon", "Varela"]

spaceshipNames.forEach(function(currentSpaceship, Index) {
    console.log("Nave: " + currentSpaceship + "\nIndíce: " + Index)
})
*/

// MAP - LETRA MAIUSCULA  -- usa-se '' toUpperCase()

/** 

let hitchedSpaceships = ["Darwin", "Leter", "Ramon", "Varela"]

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceships)
*/


// Filter -- filtrar algo na variavel
/** 
let hitchedSpaceships = ["Darwin", "Leter", "Ramon", "Varela"]

let with6Chars = hitchedSpaceships.filter(element => { return element.length >= 6 })

console.log(with6Chars) // Nesse caso, filtrei todos os elementos com 6 ou mais caracteres
*/

// Find - Condição que encontra o primeiro elemento com o caracter desejado

let hitchedSpaceships = ["Darwin", "Leter", "Ramon", "Varela"]

let with6Chars = hitchedSpaceships.find(element => { return element.length <= 5 })

console.log(with6Chars)