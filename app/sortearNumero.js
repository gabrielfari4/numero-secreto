const minimumValue = 1;
const maximumValue = 100;
const secretNumber = generateRandomNumber();

function generateRandomNumber () {
    return parseInt(Math.random() * maximumValue + 1);
}

console.log(secretNumber)

const minimumValueElement = document.getElementById('menor-valor');
minimumValueElement.innerHTML = minimumValue;

const maximumValueElement = document.getElementById('maior-valor');
maximumValueElement.innerHTML = maximumValue;