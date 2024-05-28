//Programa que mostra o fatorial de um valor digitado pelo usuário

let imput = require('readline-sync')

function cabecalho() {
    console.log('-------------------------------')
    console.log('Fatorial!')
    console.log('-------------------------------')
}

cabecalho()
let repeticao = 'sim'

while (repeticao === 'sim') {
    let valor = Number(imput.question('Digite um valor: '))
    let contador = valor
    let multiplicador = 1

    while (contador > 0) {
        multiplicador *= contador
        contador--
    }
    console.clear()
    cabecalho()
    console.log(`Fatorial de ${valor} = ${multiplicador}`)
    console.log('-------------------------------')

    repeticao = String(imput.question('Deseja repetir a operacao? (sim ou nao) '))
    console.clear()
    cabecalho()
} if (repeticao === 'nao') {
    console.log('Operacao encerrada!')
} else {
    console.log('Opção invalida, operacao encerrada!')
}

