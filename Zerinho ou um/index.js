let jogadores
let soma = 0

for (let itens of jogadores) {
    soma += itens.jogada
}

if (soma === 1) {
    for (let item of jogadores) {
        if (item.jogada === 1) {
            return item.nome
        }
    }

} else if (soma === jogadores.length - 1) {
    for (let item of jogadores) {
        if (item.jogada === 0) {
            return item.nome
        }
    }

} else {
    return 'NINGUEM'
}