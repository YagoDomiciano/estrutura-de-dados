import {objNomes} from "./data/vetor-obj-nomes.mjs"

function buscaBinaria(vetor, fnComp){
    let inicio = 0
    let fim = vetor.length - 1

    while(fim >= inicio){
        let meio = Math.floor((inicio+fim)/2)
        switch(fnComp(vetor[meio])){
            case 0:
                return meio
            
            case 1:
                inicio = meio + 1
                
            default:
                fim = meio - 1
        }
        return -1
    }
    
}

function comparar(valorMeio,  valorBuscar = "ALEXANDRE"){
    if(valorBuscar == valorMeio.first_Name) return 0
    else if (valorBuscar > valorMeio.first_Name) return 1
    else return -1
}
console.log("Posição de first_name === ALEXANDRE", buscaBinaria(objNomes, comparar))