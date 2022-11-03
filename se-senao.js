/* PROJETO CALCULADORA BÁSICA 2 NÚMEROS */


function acaoBotao (params) {

    var n1, n2, resultado, operacao   
    n1 = prompt("Digite o valor 1: ")
    n2 = prompt("Digite o segundo vaalor: ")
    operacao = prompt("Digite a operação (+ - * /):")

    if (operacao == "+"){
    resultado = parseFloat(n1) + parseFloat(n2)
    } else if (operacao == "-"){
    resultado = parseFloat(n1) - parseFloat(n2)
    } else if (operacao == "*"){
    resultado = parseFloat(n1) * parseFloat(n2)
    }   else if (operacao == "/"){
    resultado = parseFloat(n1) / parseFloat(n2)
    }

document.getElementById("paragrafo").innerText = resultado

}
