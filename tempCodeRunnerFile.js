const leia = require('prompt-sync')()

let valor1 = leia("Digite primeiro valor: ")
let valor2 = leia("Digite segundo valor: ")


media = (valor1 + valor2)/2

console.log("A Média aritimética dos valores digitados é: ", media)