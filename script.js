var numSort = []
var numEsc = []

function sorteio(){
    var cont = 0
    numSort = []
    while(cont < 6){
        let num = Math.random() * 60
        num = Math.ceil(num)

        if(!numSort.includes(num)){
            numSort[cont] = num
            console.log(numSort)
            cont++
        }
    }
    document.getElementById("sorteados").innerHTML = numSort
    contAc()
}

function getValor(valor, pos){
    valor = Number(valor)
    if(valor <= 0 || valor > 60){
        alert("Número inválido, digite um número entre 1 e 60.")
        document.getElementById(`num${pos+1}`).value = ""
    } else if(numEsc.includes(valor)){
        alert("Número repetido, escolha outro número.")
        document.getElementById(`num${pos+1}`).value = ""
    } else{
        numEsc[pos] = valor
        console.log(numEsc)
    }
    
}

function contAcertos(){
    var contAc = 0
    numEsc.forEach(function(value, index){
        if(numSort.includes(value)){
            contAc = contAc +1
        }
    })
    document.getElementById("acertos").innerHTML = contAc
}