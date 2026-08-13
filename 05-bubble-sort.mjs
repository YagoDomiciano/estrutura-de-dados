let num = [5, 11, 4, 9, 52, 24, 17, 15]

function bubbleSort(vetor){
    let trocou

    do{
        trocou = false 

        for(let i = 0; i < vetor.length - 1; i++){ // i-1 pois ele só vai até o penultimo numero, ja que ele sempre se compara a i+1
            if(vetor[i] > vetor[i+1]){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]] // equivalente a [a,b] = [b,a]
                trocou = true
            }
        }

    }while(trocou) // Enquanto trocar ele faz
}

bubbleSort(num)
console.log(num)