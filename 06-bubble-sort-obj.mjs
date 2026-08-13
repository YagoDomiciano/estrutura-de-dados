import {objMotoristas} from "./data/motoristas-obj-desord.mjs"

function bubbleSort(vetor, fnComp){
    let trocou

    do{
        trocou = false

        for(let i = 0; i < vetor.length - 1; i++){
            if(fnComp(vetor[i], vetor[i + 1])){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]] // equivalente a [a,b] = [b,a]
                trocou = true
            }
        }

    }while(trocou)
}

bubbleSort(objMotoristas, (elemen1, elemen2) => elemen1.nome_motorista > elemen2.nome_motorista) //Arrow function

console.log(objMotoristas)

