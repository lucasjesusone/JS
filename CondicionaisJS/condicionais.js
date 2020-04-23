let name = prompt("Qual seu nome?")
let velocity = 0
let newVelocity = prompt("A qual velocidade gostaria de acelerar a nave?")
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "Km/s")

if (confirmVelocity) {
    velocity = newVelocity
}
if (velocity <= 0) {
    alert("Nave está parada, considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity < 80) {
    alert("Parece uma velocidade boa para manter")
} else if (velocity < 100) {
    alert("Velocidade Alta. Considere diminuir")
} else {
    alert("Velocidade Perigosa. Controle automático forçado.")
}

alert("Piloto: " + name + "\nVelocidade: " + velocity + "Km/s")