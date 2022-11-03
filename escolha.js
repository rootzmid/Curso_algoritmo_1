

function acaoBotao() {

    var n1,n2,resultado,operacao

    n1 = prompt("Digite o primeiro valor: ")
    n2 = prompt("Digite o segundo valor: ")
    operacao = prompt("Digite a operação (+-*/): ")

    switch (operacao) {
        case "+":
            resultado = parseFloat(n1) + parseFloat(n2)
                break;
    
            case "-":
                resultado = parseFloat(n1) - parseFloat(n2)
                break;

            case "*":
                resultado = parseFloat(n1) * parseFloat(n2)
                break;

            case "/":
                resultado = parseFloat(n1) / parseFloat(n2)
                break;
        
}

document.getElementById("paragrafo").innerText = resultado

}



