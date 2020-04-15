// Desafio 1-1 B - Cálculo de aposentadoria

const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

const condicaoF = sexo == "F" && contribuicao >= 30 && (idade + contribuicao) >= 85
const condicaoM = sexo == "M" && contribuicao >= 35 && (idade + contribuicao) >= 95

if ( condicaoF || condicaoM) {
    console.log(`${nome}, você já pode se aposentar`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar`)
}