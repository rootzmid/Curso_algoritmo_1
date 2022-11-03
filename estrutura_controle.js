/* 
escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Escreva a nota 1: ")
   leia(notaUm)
   escreval("Escreva a nota 2: ")
   leia(notaDois)
   media := (notaUm + notaDois) / 2
   
         se media >= 5 entao
            escreval(nome," está Aprovado")
         senao
            escreval(nome," foi reprovado")
         fimse

         escreval("A média é: " , media)
*/ 

var nome, notaUm, notaDois;

nome = prompt("Digite o nome do aluno: ")
notaUm = prompt("Digite a nota 1: ")
notaDois = prompt("Digite a nota 2: ")

media = (parseFloat(notaUm) + parseFloat(notaDois)) / 2;

    if(media >= 50) {
        alert(nome + " Aprovado!")
    }   
    else {
            alert(nome + " Reprovado!")
    }

alert("A média final foi " + media)