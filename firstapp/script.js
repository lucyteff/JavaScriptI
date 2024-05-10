//constants
const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000


//input
anoNascimento = parseInt(prompt("Informe seu ano de nascimento"))
nome = prompt("Informe seu nome")
salarioBase = parseFloat(prompt("Informe o salário base"))
gratificacao = parseFloat(prompt("Informe a gratificação"))
bonus = parseFloat(prompt("Informe o bônus"))
desconto = parseFloat(prompt("Informe o desconto"))
salarioLiquido = 0
adicional = 0

//process
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento

//IF:
adicional = SALARIO_ATE_20
salarioLiquido = salarioBase + gratificacao + bonus - desconto
mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido

 
//output
alert(mensagem)