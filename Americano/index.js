let numeros
let soma = 0

for (let numero of numeros) {
    soma += numero
}

if (soma % numeros.length === 0) {
    console.log(numeros.length)
} else {
    console.log(soma % numeros.length)
} 