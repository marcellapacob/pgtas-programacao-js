const nome = "Milka", raca = "SRD"
let idade = "5, 1.5", peso = "11", adotado = true

let nomeUpperCase = nome.toUpperCase()
let racaLowerCase = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()

const doguinho = [{
    nome: nomeUpperCase,
    raca: racaLowerCase,
    peso: peso,
}]

console.log(doguinho)