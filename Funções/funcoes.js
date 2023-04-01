// Começando estudo sobre funções!
document.write("Funções")
/*
function somar(a,b){
    let resultado = a + b

    console.log(`O resultado da soma é ${resultado}`)
}

somar(10,5)
*/
//-------------------------------------------------------------------------------------
/*
function nomeCompleto(nome , sobrenome){
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto("Elmo" , "Neto")
*/
//--------------------------------------------------------------------------------------
/*function somar(){
alert("Vamos executar uma soma de dois números!")
let a = parseInt(prompt("Qual o primeiro numero?"))
let b = parseInt(prompt("Qual o segundo numero?"))
    
let resultado = a + b

console.log(`O resultado é ${resultado}`)

}

somar()
*/
//--------------------------------------------------------------------------------------
/*
function somar(a,b){
    
    return a + b
}

let resultado = somar(10,10)

console.log(resultado)
*/
//--------------------------------------------------------------------------------------

function verificacaoDeIdade (idade){
    if (idade >=18){
        return true
    } else{
        return false
    }
}

let suaIdade = prompt("Qual é a sua idade?")
let verifica = verificacaoDeIdade(suaIdade)

if(verifica){
    console.log("Você é adulto")
} else{
    console.log("Você é uma criança")
}