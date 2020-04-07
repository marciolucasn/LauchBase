const alunos = [
    {
        nome: "Márcio",
        nota: 10
    },
    {
        nome: "Mayk",
        nota: 8
    },
    {
        nome: "Fulano",
        nota: 4
    }
]

const media = (aluno[0].nota + aluno[1].nota + aluno[2].nota) / 3

if (media >= 5) {
    console.log(`A meédia da turma foi ${media}. Parabéns!!`)
} else {
    console.log('A média foi menor que 5. Estudem mais!!')
}