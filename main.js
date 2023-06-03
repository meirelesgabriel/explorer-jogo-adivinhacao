//variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")
let randomNumber = generateNumber()
console.log(randomNumber)
let xAttempts = 1 

//eventos
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleEnter)

//funções callback
function handleClick(event) {
    event.preventDefault()
    
    const newNumber = document.querySelector('#newNumber')
    //tudo que não for um número, será retornado um NaN = not a number
    let newNumberInt = parseInt(newNumber.value)
    let newNumberFloat = parseFloat(newNumber.value)
    console.log(newNumberFloat)
    console.log(Number.isInteger(newNumberFloat))

    // se o input estiver vazio, ou for nulo, ou for menor que 0, ou for maior que 10, ou for um caracter alfabético, ou for um número com ponto: (aprender como validar número com vírgula)
    if(newNumber.value == '' || newNumber.value == null || newNumber.value < 0 || newNumber.value > 10 || Number.isNaN(newNumberInt) || !(Number.isInteger(newNumberFloat))) {
        window.alert("insira um número válido.")
        newNumber.value = ''
    } else {
        if (Number(newNumber.value) == randomNumber) { 
            togglePage()
    
            // document.querySelector(".page2 h1").innerText = `Acertou em ${xAttempts} tentativas`
            page2.querySelector("h1").innerText = `Acertou em ${xAttempts} tentativas`
        }
        newNumber.value = ''
        xAttempts++
    }
    

    // querySelect("seletor CSS, seja uma classe ou um ID")
    // getElementByID("ID")
    // getElementByClass("Class")

    // const newNumber = document.querySelector('#newNumber')

    // console.log('só a variável - o elemento html extraído da página: ', newNumber)
    // console.log('.innerText ou .innerHTML - texto entre as tags, mas como o input abre e fecha em si mesmo, não há nada aqui: ', newNumber.innerText)
    // console.log('.value - o valor inserido no campo do imput: ', newNumber.value)
}

function handleResetClick(event) {
    togglePage()
    
    randomNumber = generateNumber()
    // console.log(randomNumber)
    xAttempts = 1

}

function handleEnter(event) {
    if (event.key == 'Enter' && page1.classList.contains('hide')) {
        handleResetClick()
    }
}

//outras funções
function generateNumber() {
    return Math.round(Math.random() * 10)
}

function togglePage() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
}

