function selectionSort(vetor){
    for(let posSel = 0; posSel < vetor.length -1; posSel ++){
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]) posMenor = i
        }
        if(vetor[posSel] > vetor[posMenor]){
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
        }
    }
}

let num = [5, 11, 4, 9, 52, 24, 17, 15]

import {nomes} from "./data/nomes-desord.mjs"

selectionSort(nomes)
console.log(nomes)