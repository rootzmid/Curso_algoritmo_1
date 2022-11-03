/*

repita
         escreva("Digite o primeiro nome: ")
         leia(valor1)
         escreva("Digite o segundo nome: ")
         leia(valor2)
         escreval("Resultado: ", valor1," " ,valor2)
         escreval("Deseja sair? s/n")
         leia(sairLoop)
   ate sairLoop <> "n"

*/

function acaoBotao() {

    var sairLoop, valor1, valor2
    do{
       valor1 = prompt("Digite o primeiro nome: ")
       valor2 = prompt("Digite o segundo valor: ")
       document.getElementById("paragrafo").innerText = "Resultado: " + valor1 + " " + valor2
       sairLoop = prompt("Deseja sair? (s/n) ")
    }while(sairLoop == "n")
}