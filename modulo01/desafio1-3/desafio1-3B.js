const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

for (user of usuarios) {
    let receita = calculaSaldo(user.receitas, user.despesas)
    if (receita > 0) {
        console.log(`${user.nome} possui um saldo POSITIVO de ${receita}.`)
    } else {
        console.log(`${user.nome} possui um saldo NEGATIVO de ${receita}.`)
    }
}

function calculaSaldo(receita, despesas, ) {
    return somaNumeros(receita) - somaNumeros(despesas)
}

function somaNumeros(numeros) {
    let soma = 0
    for (num of numeros) {
        soma = soma + num
    }
    return soma
}