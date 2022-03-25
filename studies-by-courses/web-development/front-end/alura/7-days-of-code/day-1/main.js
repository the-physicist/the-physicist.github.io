// Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

const numeroUm = 1
const stringUm = '1'
const numeroTrinta = 30
const stringTrinta = '30'
const numeroDez = 10
const stringDez = '10'

const codeNaTela = document.getElementById('codeNaTela')
const resultadoNaTela = document.getElementById('resultadoNaTela')

codeNaTela.innerHTML = `
const numeroUm = 1 <br>
const stringUm = '1' <br>
const numeroTrinta = 30 <br>
const stringTrinta = '30' <br>
const numeroDez = 10 <br>
const stringDez = '10'`

if (numeroUm == stringUm && numeroUm !== stringUm) {
  resultadoNaTela.innerHTML +=
    '<p>As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.</p>'
} else {
  resultadoNaTela.innerHTML +=
    '<p>As variáveis numeroUm e stringUm não têm o mesmo valor.</p>'
}

if (numeroTrinta === stringTrinta) {
  resultadoNaTela.innerHTML +=
    '<p>As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo.</p>'
} else {
  resultadoNaTela.innerHTML +=
    '<p>As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo.</p>'
}

if (numeroDez == stringDez && numeroDez !== stringDez) {
  resultadoNaTela.innerHTML +=
    '<p>As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes.</p>'
} else {
  resultadoNaTela.innerHTML +=
    '<p>As variáveis numeroDez e stringDez não têm o mesmo valor.</p>'
}
