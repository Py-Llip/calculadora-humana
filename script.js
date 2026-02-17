const numeros = new Map([
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
    ['0', 0]
])

const operadores = new Map([
    ['+', '+'],
    ['-', '-'],
    ['_', '/'],
    ['.', '*']
])

const digitos = [numeros, operadores]

var output = document.getElementsByTagName('output')[0]
var expressao = document.getElementById('expressao')
var digitacao = document.getElementById('digitacao')

function add_butoes(dic, div) {
    let local_pai = document.querySelector(`#digitacao > #${div}`)
    for (let i of dic.keys()) {
        let input = document.createElement('input')
        input.setAttribute('type', 'button')
        input.value = i
        local_pai.appendChild(input)
    }
}

add_butoes(numeros, 'numeros')
add_butoes(operadores, 'operadores')

var inputs = document.getElementsByTagName('input')
for (let input of inputs) {
    input.addEventListener('click', function(){
        for (let d of digitos) {
            if (d.has(this.value)) {
                expressao.innerText += d.get(this.value)
            }
            
        }
        output.innerText = eval(expressao.textContent)
    })
}

