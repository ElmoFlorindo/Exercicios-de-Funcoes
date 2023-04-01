/* Crie uma função que valide usuário e senha. 
Usuário correto é : helena
senha correta é : linda
*/



function criarusuário(){
    let login = prompt("Qual é o seu login?")
    let password = prompt("Qual é sua senha?")
    
    console.log(`Seu usuário é :${login} Sua senha é: ${password} `)

    function verificalogin(){        

        if(login == "helena" && password == "linda"){
            console.log("Bem vinda ao sistema EleveDigital!")
        }
        else{
            console.log("Usuário ou senha invalido! Tente novamente!")
            criarusuário()
           
        }
    }
    
    verificalogin()

    }


criarusuário()