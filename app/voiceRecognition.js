const guessElement = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    //console.log(e.results[0][0].transcript)
    console.log(e)
    guess = e.results[0][0].transcript
    displayGuessOnScreen(guess)
}

function displayGuessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
    `
}