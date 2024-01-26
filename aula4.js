// AULA COM COMANDOS SWITCH


// Ativiadade 1 - 25/01/2024
// OBS.: OS EXERCICIOS COMEÇAM NA LINHA 63

// exemplo menu utilizando o teclado para escolher entre as opções tipo mostrar o menu


// console.log("Escolha o suco estre as opções abaixo");
// console.log("1 - Suco de Laranja");
// console.log("1 - Suco de Beterraba");

// declarar variavel para receber recebe a escolha

// **************************************//

// let leia = require('prompt-sync') ()

// console.log("Escolha o suco estre as opções abaixo");
// console.log("1 - Suco de Laranja");  // pode ser todas as opções no mesmo console log. Ex: Console.log("1-suco 1" + "2 - suco2" + "etc") O + sig concaternar juntar
// console.log("2 - Suco de Beterraba");

//  //pedido = leia("Faça sua escolha: "); ------>>>// assim o cod não vai funcionar pq ele não reconhece o numero do case como numero e sim com string(texto) então precisa usar o comando a baixo para converter a string em numero.

//  pedido = parseInt(leia("Faça sua escolha: ")); //a função "parseInt()" converte a string para inteiro ou seja numero o parametro vai detro dos parenteses da função parseInte.
//     switch (pedido){

//         case 1: 
//         case "Suco de Laranja":    
//             console.log("O Suco escolhido foi Laranja")
//             break;

//             case 2:
//             console.log("O Suco escolhido foi Beterraba")
//             break;

//             default:
//                 console.log("O Suco escolhido não está disponível")
//     }



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


//"Exercicio 1 - Hotel")

    let hotel = require('prompt-sync') ()

    hospede = hotel ("Digite o nome do Hospede: ")

    console.log("Serviços disponiveis:");

    console.log("1 - Fazer cheking " +  
                " 2 - Chamar Serviço de Quarto " + 
                " 3 - Fazer Pedido " + 
                " 4 - Fazer Chekout "
                );

    servico = parseInt(hotel("Escolha o tipo de serviço: ")); 
        switch (servico){

            case 1:    
                console.log("O serviço escolhido foi Cheking")
                //nomeHospede = leia ("Digite o nome do Hospede: ")
                //hospede = leia
            break;

            case 3:
                console.log("O serviço escolhido foi Chamar Serviço de Quarto")
             break;

            case 4:
                console.log("O serviço escolhido foi Fazer Pedido")
                console.log("Café da mnhã" + "Almoço" + "Jantar") // opções de pedido 
            break;

            case 5:
                console.log("O serviço escolhido foi Chekout")
                // ver como incluir função de somar a conta e informar valor final da estadia.
                console.log(hospede, "obrigado pela estadia. Volte Sempre!!")
            break;

            default:
                console.log("Serviço selecionado indisponivel. Por favor escolha um seriço válido, ou entre em contato com a recepção.")
        }

// Fim Exercicio 1 - Hotel

//exercicio 2 - Caluculadora


    let calc = require('prompt-sync') ()

    console.log("Serviços disponiveis:");
    
    console.log(" 1 -> + : soma " +  
                " 2 -> - : subtração " + 
                " 3-> / : divisão " + 
                " 4 -> * : multiplicação "
                );

    valor1 = parseInt(calc ("Digite 1º valor: "))           
    

     operacao = parseInt(calc("Escolha a operação (+ - / * ): ")); 

     valor2 = parseInt(calc("Digite 2º valor: "))

        switch (operacao){
    
            case 1:    
                console.log(valor1 + valor2)
            break;
    
            case 2:
                console.log(valor1 - valor2)
            break;
    
            case 3:
                console.log(valor1 / valor2)
            break;
    
            case 4:
                console.log(valor1 * valor2)
            break;
    
            default:
                console.log("Operação inválida")
        }

//fim exercicio 2

//exercicio 3 - Peso Ideal

    ideal = require('prompt-sync') ()

    peso = ideal("Digite seu peso: ")

    sexo = ideal("Escolha F ou M: ")

    switch (sexo){
    
            case "F":   
                console.log("Seu peso ideal é: ", (peso - 100) * 0.9)
                break;
    
                case "M":
                    console.log("Seu peso ideal é: ", (peso - 100) * 0.85)
                break;
    
                default:
                    console.log("Não foi possivel calcular seu peso ideal.")

    }

//fim exercicio 3

// exercicio 4 - cliente vip


    let cvip = require('prompt-sync') ();

    valor = parseFloat(cvip("Digite valor total da compra: "))
    console.log(" Escolha o tipo de desconto " + " 1 - Funcionário " + " 2 - Cliente VIP ")

    desconto = parseInt(cvip("Tipo de desconto "))
        
    switch (desconto){
            
        case 1:  
            console.log("Valor total da compra com desconto de funcionário é: ", valor - (valor * 0.1))
        break;
    
        case 2:   
                console.log("Valor total da compra com desconto de Cliente VIP é: ", valor - (valor * 0.05))
        break;
    
        default:
            console.log("Nenhum valor de desconto aplicado. Total a pagar", valor)
    }

// fim exercicio 4


//exercicio 5 - calendario

        let leia = require('prompt-sync') ()

        console.log("digite um numero de 1 a 12 referente ao mês:");
        
        console.log("1- Janeiro " + " / 2- Fevereiro " + " / 3- Março \n 4- Abril " + " / 5- Maio " + " / 6- Junho\n 7- Julho" + " / 8- Agosto" + " / 9- Setembro\n 10- Outubro" + " / 11- Novembro" + " / 12- Dezembro");

        mes = parseInt(leia ("Mês escolhido: "))

        switch (mes){

            case 1:
                console.log ("Janeiro")
            break;

            case 2:
                console.log ("Fevereiro")
            break;

            case 3:
                console.log ("Março")
            break;
            
            case 4:
                console.log ("Abriu")
            break;
        
            case 5:
                console.log ("Maio")
            break;

            case 6:
                console.log ("Junho")
            break;
            
            case 7:
                console.log ("Julho")
            break;
            
            case 8:
                console.log ("Agosto")
            break;
            
            case 9:
                console.log ("Setembro")
            break;
            
            case 10:
                console.log ("Outubro")
            break;
            
            case 11:
                console.log ("Novembro")
            break;
            
            case 12:
                console.log ("Dezembro")
            break;

            default:
                console.log ("Esse mês não existe.")
        }

// fim exercicio 5


//exercicio 6 - Taxa de natalidade

        leia = require('prompt-sync') ()

        console.log("O deseja calcular:");
        console.log ("1-Natalidade\n2-Mortalidade")
        taxa = parseInt(leia("Indicador:"))


        habitantes = parseInt(leia("Digite a numero de Habitantes:"))
        

        switch (taxa){

            case 1:
                nascimento = parseInt(leia("Digite a quantidade de nacimentos:"))
                console.log ("Taxa de Natalidade: ", (nascimento *1000) / habitantes )
            break;

            case 2:
                obito = parseInt(leia("Digite a quantidade de óbitos:"))
                console.log ("Taxa de Mortalidade: ", (obito *1000) / habitantes )
            break;

            default:
                console.log ("Não foi possivel calcular.")
        }

 // fim exercio 6


// exercicio 7

        leia = require('prompt-sync') ()

        
        valorProdut = parseFloat(leia("Digite o valor do produto: "))
    

        console.log("Forma de pagamento: ");
        console.log ("1-À vista\n2-À prazo")
        pagamento = parseInt(leia("Escolha a forma de pagamento:"))

        switch(pagamento) {
            case 1: 
            aVista = valorProdut  - (valorProdut * 0.1)
            console.log (" Valor final da compra á vista", aVista)

            default: 
            console.log (" Valor do produto", valorProdut)
        }

// fim esxercicio 7






















    // let leia = require('prompt-sync') ()

    // console.log("Serviços disponiveis:");
    
    // console.log(" 1 -> + : soma " +  
    //             " 2 -> - : subtração " + 
    //             " 3-> / : divisão " + 
    //             " 4 -> * : multiplicação "
    //             );

    // valor1 = parseInt(leia ("Digite 1º valor: "))           
    

    //  operacao = parseInt(leia("Escolha a operação (+ - / * ): ")); 

    //  valor2 = parseInt(leia ("Digite 2º valor: "))

    //     switch (operacao){
    
    //         case 1:    
    //             console.log(valor1 + valor2)
    //             break;
    
    //             case 2:
    //             console.log(valor1 - valor2)
    //             break;
    
    //             case 3:
    //                 console.log(valor1 / valor2)
    //                 break;
    
    //             case 4:
    //                 console.log(valor1 * valor2)
    //                 break;
    
    //             default:
    //                 console.log("Operação inválida")
   // }