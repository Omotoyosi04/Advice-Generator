const adviceEl = document.getElementById('advice')
const adviceBtn = document.getElementById('btn')
const numberEl = document.getElementById('num')


const apiUrl = 'https://api.adviceslip.com/advice'

let adviceCount = 1

function incrementNumber() {
    adviceCount++
    numberEl.textContent = `ADVICE #${adviceCount}`
}

adviceBtn.addEventListener('click', generateAdvice)

generateAdvice()


function generateAdvice() {
    fetch(apiUrl).then(res => res.json()).then(data => {
        adviceEl.innerHTML = data.slip.advice
        numberEl.textContent = `ADVICE #${adviceCount}`
    })
}
