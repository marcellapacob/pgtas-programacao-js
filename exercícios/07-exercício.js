/**

  Contador de satisfaÃ§Ã£o de passeio

  Crie um script que avise quando o Dog jÃ¡ passeou o suficiente. 
  Para saber, vamos considerar que ele se sentirÃ¡ satisfeito somente a partir de 5 voltas na quadra.

  Use a estrutura de repetiÃ§Ã£o while.

  Exiba: 
  Qual o nÃºmero da volta atual
  Quando o dog estiver satisfeito

  Extra: transforme a lÃ³gica em uma funÃ§Ã£o (da forma que conseguir)

 */

const voltasParaDogFicarSatisfeito = 5
let volta = 0

while (volta <= voltasParaDogFicarSatisfeito) {

  console.log(`Volta de nÂº ${volta} com o Pitoco`)
  console.log(`Pitoco ainda nÃ£o estÃ¡ satisfeito!`)

  volta++
}

console.log(`Acaboooooou o passeio, Pitoco!`)
console.log(`----------------------------`)

// com a funÃ§Ã£o (extra)
function verificarSeEstaSatisfeito() {

  const voltasParaDogFicarSatisfeito = 5
  let volta = 0

  while (volta <= voltasParaDogFicarSatisfeito) {

    console.log(`Volta de nÂº ${volta} com o Pitoco`)
    console.log(`Pitoco ainda nÃ£o estÃ¡ satisfeito!`)

    volta++
  }

  console.log(`Acaboooooou o passeio, Pitoco!`)
}

verificarSeEstaSatisfeito(10)

// let nVoltas = 0

// while (nVoltas <= 4) {

//   if (nVoltas < 4)
//     console.log("Eu nao estou satisfeito")
//   else console.log("Eu estou satisfeito")

//   console.log(`Volta ${nVoltas + 1}`)

//   nVoltas++
// }