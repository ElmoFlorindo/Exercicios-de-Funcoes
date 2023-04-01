/* Calcule o preço do imovel 
    - m2 = 3000
    - Se tiver 1 quartos, o m2 é 1x
    - se tiver 2 quartos, o m2 é 1.2x
    - se tiver 3 quartos, o m2 é 1.5x

*/

let valormetro2 = parseInt(prompt("Qual o valor do metro quadrado da região?"))
let metragem = parseInt(prompt("Quantos m2 o imóvel tem?"))
let quartos = parseInt(prompt("Quantos quartos o imóvel tem?")) 

function calculaPrecoImovel(m2 , qq , valorm2){
    
    var valorm2 = valormetro2
    var m2 = metragem
    var qq = quartos
    var total = 0

   if (qq === 1){
   total =  m2 * 1 * valorm2
   console.log(total)
   }else if(qq===2){
    total =  m2 * 1.2 * valorm2
   console.log(total)
   }else {
    total =  m2 * 1.5 * valorm2
   console.log(total)
   }

} 

calculaPrecoImovel()