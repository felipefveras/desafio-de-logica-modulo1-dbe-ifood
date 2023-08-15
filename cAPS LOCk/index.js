let palavraConsertada
let input

if (input.slice(0, 1) === input.slice(0, 1).toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
    palavraConsertada = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()
    return palavraConsertada

} else if (input === input.toUpperCase()) {
    palavraConsertada = input.toLowerCase()
    return palavraConsertada
} else {
    return input
}
