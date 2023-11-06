function checkIfGuessValueIsValid(guess) {
    const number = +guess

    if (invalidGuess(number)) {
        guessElement.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    if (numberIsGreaterOrLessThanRange(number)) {
        guessElement.innerHTML += `<div>Valor fora do esperado. O valor precisa estar entre ${minimumValue} e ${maximumValue}.</div>`
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${secretNumber}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        
    } else if (number > secretNumber) {
        guessElement.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else if (number < secretNumber) {
        guessElement.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function numberIsGreaterOrLessThanRange(number) {
    return number < minimumValue || number > maximumValue
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})