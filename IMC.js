/* Programa que calcula o imc do usuário a partir do seu peso e altura, e informa se o peso está ideal à altura, abaixo do peso ou acima do peso */

let imput = require('readline-sync')
console.log('=============================================================')
console.log ('Cálculo IMC')
console.log('=============================================================')

const peso = Number(imput.question('Digite o seu peso (em kg): '))
const altura = Number(imput.question('Digite sua altura (em metros): '))
const imc = (peso / (altura ** 2)).toFixed(1)
console.log('=============================================================')

console.log(`Seu IMC é ${imc}`)

if (imc < 17) {
    console.log('Muito abaixo do peso!')
    console.log('O peso ideal para sua altura seria kg', ((altura ** 2)* 18.5).toFixed(1))
} else if (imc < 18.5) {
    console.log(`Abaixo do peso!`)
    console.log('O peso ideal para sua altura seria kg', ((altura ** 2)* 18.5).toFixed(1))
} else if (imc <= 25) {
    console.log(`Peso ideal!`)
} else if (imc < 30) {
    console.log(`Sobrepeso!`)
    console.log('O peso ideal para sua altura seria kg', ((altura ** 2)* 25).toFixed(1))
} else if (imc < 35) {
    console.log(`Obesidade!`)
    console.log('O peso ideal para sua altura seria kg', ((altura ** 2)* 25).toFixed(1))
} else if (imc < 40) {
    console.log(`Obesidade severa!`)
    console.log('O peso ideal para sua altura seria kg', ((altura ** 2)* 25).toFixed(1))
} else {
    console.log(`Obesidade mórbida!`)
    console.log('O peso ideal para sua altura seria kg', ((altura ** 2)* 25).toFixed(1))
}
console.log('=============================================================')
