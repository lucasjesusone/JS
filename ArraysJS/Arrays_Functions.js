let hitchedSpaceships = ["Collossus", "Fenix", "Alemã"]

console.log(hitchedSpaceships)


hitchedSpaceships.push("Leonidas") // push adiciona o elemento na ultima posição e o pop remove o ultimo elemento.

console.log(hitchedSpaceships)

// Função POP - também retorna o ultimo elemento como no exemplo abaixo...

let removedSpaceship = hitchedSpaceships.pop() // Não precisa colocar nada entre parentes pq por ser o ultimo elemento ele automaticamente detecta

console.log(removedSpaceship)

// Função SHIFT - Remove o elemento da primeira posição no array


let hitchedSpaceships = ["Collossus", "Fenix", "Alemã"]

console.log(hitchedSpaceships) // Chamou os tres elementos acima

let removedspaceShip = hitchedSpaceships.shift() // removeu o primeiro elemento

console.log(hitchedSpaceships) // chamou os 2 elementos após a remoção do primeiro

console.log(removedspaceShip) // Emitiu o elemento removido



// Função unshift adiciona o primeiro elemento do array

// por exemplo

/**
 
let hitchedSpaceships = ["Collossus", "Fenix", "Alemã"]

console.log(hitchedSpaceships)

hitchedSpaceships.unshift("Elemental")    Aqui o elemento será adicionado na primeira posição do array

console.log(hitchedSpaceships)



 */



// Para encontrar um elemento no array, usa-se o indexof, se não existir o elemento no array, o index retorna -1.

/**
 
let hitchedSpaceships = ["Collossus", "Fenix", "Alemã"]

let FenixPosition = hitchedSpaceships.indexOf("Fenix")

console.log(fenixPosition)


 */