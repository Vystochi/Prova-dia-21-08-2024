const usuarios = []   
function adicionarUsuario(nome, idade, email) {
    if (!nome || !idade || !email || idade <= 0) {
        console.error("Dados Inválidos! Nome, Idade e Email obrigatórios!.")
    }
    usuarios.push({ nome, idade, email })
    console.log(nome, "foi cadastrado")
}

function listarUsuarios() {
    console.log("Usuários cadastrados:")
    usuarios.forEach(({ nome, idade, email }) => {
        console.log("Nome:", nome, "Idade:", idade, "Email:", email)
    })
}

adicionarUsuario("Eric Vistochi", 16, "eric_albuquerque@estudante.sesisenai.org.br")
adicionarUsuario("João Gentil", 16, "joao_scarabelot@estudante.sesisenai.org.br")
listarUsuarios()
