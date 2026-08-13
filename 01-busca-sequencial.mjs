const frutas = ["banana", "maçã", "pera", "limão", "abacaxi"]

const numeros = [7, 5, 8, 10, 9, 27]

function buscaSequencial(vetor, vetorBusca){
//percursso do vetor com for tradicional

    for(let i = 0; i < vetor.length ; i++){
        if(vetor[i] === vetorBusca) return i;
    }
    return -1 //valor busca nn existe em vetor
}

console.log("Posição de maçã: ", buscaSequencial(frutas, "maçã"))
console.log("Posição de uva: ", buscaSequencial(frutas, "uva"))
console.log("Posição de abacaxi: ", buscaSequencial(frutas, "abacaxi"))
console.log("Posição de 8: ", buscaSequencial(numeros, 8))
console.log("Posição de 2: ", buscaSequencial(numeros, 2))