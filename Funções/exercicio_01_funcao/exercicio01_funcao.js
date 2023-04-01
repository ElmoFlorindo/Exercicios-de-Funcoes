/* Calcule a porcentagem de dois números.

let x = 40
let y = 10 

let pct =   calcPct(x,y)
console.log(`${pct}% de ${x} e ${y} `)
*/


function calcularPorcentagem(x,y){
    let porcentagem = (x / y) * 100
    let resultado = console.log(`${porcentagem}% de ${y} e ${x} `)
    
    return resultado
}

calcularPorcentagem(10,50)

