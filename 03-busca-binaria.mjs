function buscaBinaria(vetor,valorBusca){
    let inicio = 0
    let fim = vetor.length - 1
    while(fim >= inicio){
        let meio = Math.floor((inicio + fim)/2)

        if(valorBusca == vetor[meio]){
            return meio
        } else if(valorBusca > vetor[meio]){
            inicio = meio + 1
        } else{
            fim = meio - 1
        }
    }

}

import {nomes} from "./data/vetor-nomes.mjs"

let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]
console.log("Posição de Alexandre: ", buscaBinaria(nomes, "ALEXANDRE"))