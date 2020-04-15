//Desafio 1-3 - Usuários e tecnologias & Busca por tecnologia

const usuarios = [
    {
        nome: "Márcio",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        nome: "Mayk",
        tecnologias: ["HTML", "CSS", "JavaScript", "Node"]
    },
    {
        nome: "Diego",
        tecnologias: ["HTML", "JavaScript"]
    }
]

for (user of usuarios) {
    if (seTrabalhaComCSS(user.tecnologias)) {
        console.log(`O ${user.nome} trabalha com CSS.`)
    }
}

function seTrabalhaComCSS (tecnologias) {
    for (tech of tecnologias) {
        if (tech == "CSS") {
            return true
        }
    }
    return false
}