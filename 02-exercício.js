/**
 * 
 */

const nomeDog = "tHo@ R @!#"

let nomeFormatado = removerCaracteresEspeciais(nomeDog)
nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1, nomeFormatado.lenght).toLowerCase()

console.log(nomeDog)
console.log(nomeDog.charAt())

function removerCaracteresEspeciais(nome) {
    return nome.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "");
}