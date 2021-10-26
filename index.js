const perguntas = [
    "O que eu aprendir hoje ?",
    "Tal aprendizado será utilizado para quais fins ?",
    "Qual o foi o maior desafio para este aprendizado ?",
    "E no que pode ser aprimorado ?"
]
const respostas = []

const perguntar = (index = 0) => {
    process.stdout.write("\n\n" + perguntas[index] + "\n")
}
perguntar()

const responder = () => {
    process.stdin.on("data", dados => {
        respostas.push(dados.toString().trim())
        if(respostas.length < perguntas.length){
            perguntar(respostas.length)
        } else {
            // console.log(respostas)
            process.exit()
        }
    })
}
responder()

process.on('exit', () => {
    console.log("Segue abaixo seu resultado" + '\n\n\n')
    for(item in perguntas){
        console.log(perguntas[item].replace('?', ':') + '\n' +respostas[item] + '\n\n')
    }
})