// Array bidimensional, uma array que armazena outra array
// OBS: aqui ele executa a primeira array vazia, no codepen,não executa a primeira array. obs
let hitchedSpaceships = [
    ["Elemental", 0],
    ["Colossus", 9],
    ["Alemã", 7],
    ["Virtual", [0, 2]]
]


hitchedSpaceships.push(["General", 20])

console.log(hitchedSpaceships)

console.log(hitchedSpaceships[2][1]) // Aqui entro na função '' Alemã '' solicitando a posição 1 dentro da array ( numero 7 )

console.log(hitchedSpaceships[3][1][0]) // 3 (Array "Virtual") 2 (Array " 0, 2" ) e 0 (Posição dentro da array 1)