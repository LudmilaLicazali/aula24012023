// AULA COM COMANDOS SWITCH


// exemplo menu utilizando o teclado para escolher entre as opções tipo mostrar o menu


// console.log("Escolha o suco estre as opções abaixo");
// console.log("1 - Suco de Laranja");
// console.log("1 - Suco de Beterraba");

// declarar variavel para receber recebe a escolha

// **************************************//

let leia = require('prompt-sync') ()

console.log("Escolha o suco estre as opções abaixo");
console.log("1 - Suco de Laranja");  // pode ser todas as opções no mesmo console log. Ex: Console.log("1-suco 1" + "2 - suco2" + "etc") O + sig concaternar juntar
console.log("2 - Suco de Beterraba");

 //pedido = leia("Faça sua escolha: "); ------>>>// assim o cod não vai funcionar pq ele não reconhece o numero do case como numero e sim com string(texto) então precisa usar o comando a baixo para converter a string em numero.

 pedido = parseInt(leia("Faça sua escolha: ")); //a função "parseInt()" converte a string para inteiro ou seja numero o parametro vai detro dos parenteses da função parseInte.
    switch (pedido){

        case 1: 
        case "Suco de Laranja":    
            console.log("O Suco escolhido foi Laranja")
            break;

            case 2:
            console.log("O Suco escolhido foi Beterraba")
            break;

            default:
                console.log("O Suco escolhido não está disponível")
    }



//exemplo sem utilizar teclado
// let sucoDeFruta = "Suco de Laraja"  //essa será a possivel escolha do mesmo tipo declarado fixo

//     switch (sucoDeFruta){

//         case "Suco de Laranja":
            //case "Suco de Limão": 
//             console.log("O Suco escolhido foi Laranja")
//             break;

//             case "Suco de Beterraba":
//             console.log("O Suco escolhido foi Beterraba")
//             break;

//             default:
//                 console.log("O Suco escolhido não está disponível")
//     }       








// Exercicio 1 - Hotel

