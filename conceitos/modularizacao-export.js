/*
    Sintaxe CommonJs:
        module.exports = {} / require('') 
    ESM - Ecmascript Standard Modules
        export {} / import
*/

const listaDeBrinquedos = [
        'Bola',
        'Osso',
        'Corda',
        'Sino',
      ]
      
/*      listaDeBrinquedos.forEach(Cachorro => {
        console.log(Cachorro)
      })
            
      const brinquedosEntregue = [
        {
          nome: 'Bola',
          
        },
        {
          nome: 'Osso',
          
        },
        {
          nome: 'Corda',
          
        },
        {
          nome: 'Sino',
          
        },
        
      ]*/


function exibirNomePet(nomePet) {
    console.log(`O nome do pet é: ${nomePet}`)
}

exibirNomePet('Milka')
exibirNomePet('Mia')

export {
    exibirNomePet
    listaDeBrinquedos
}


