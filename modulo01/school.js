 //Aplicação para determinar aprovação de alunos
 
 const alunosTurmaA = [
     {
         nome: "Márcio",
         nota: 7

     },
     {
        nome: "Mayk",
        nota: 10
     },
     {
        nome: "Fulano",
        nota: 3
     },
     {
        nome: "Fulano",
        nota: 3
     }
 ]
 const alunosTurmaB = [
    {
        nome: "Diego",
        nota: 10
    },
    {
       nome: "Robsom",
       nota: 6
    },
    {
       nome: "Siclano",
       nota: 4
    },
    {
        nome: "Novo Aluno",
        nota: 1
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    return soma / alunos.length
}


function marcarComoReprovado(aluno) {
    aluno.reprovado = false 
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} entá reprovado!`)
    } else {
        console.log(`O aluno ${aluno.nome} está reprovado. Parabéns!!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosTurmaA)
