//input
anoNascimento=2001
nome = "Lucy"

//process
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos "

//output
alert(mensagem)