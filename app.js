const attemptsEl = document.getElementById("attempts");
const descriptionEl = document.getElementById("description");
const inputEl = document.getElementById("input");
const submitEl = document.getElementById("submit");
const restartEl = document.getElementById("restart");
const guessesEl = document.getElementById("guesses");

const randomNumber = Math.ceil(Math.random() * 99);

let numberGuess = 0;
let guessArray = [];

const checkInput = (userInput, numberGuess) => {
    if (numberGuess < 10) {
        if (userInput === randomNumber) {
            descriptionEl.innerHTML = `Congratulations. You guessed the number in ${numberGuess} attempts. It was ${randomNumber}`;
            descriptionEl.style.color = 'green';
            submitEl.style.display = "none";
            restartEl.style.display = "inline-block"
        }
        else if (userInput < randomNumber) {
            descriptionEl.innerHTML = `Your guess is Low. Enter greater number`;
            descriptionEl.style.color = 'red';
        }
        else if (userInput > randomNumber) {
            descriptionEl.innerHTML = `Your guess is High. Enter smaller number`;
            descriptionEl.style.color = 'red';
        }
    }
    else {
        if (userInput === randomNumber) {
            descriptionEl.innerHTML = `Congratulations. You guessed the number in ${numberGuess} attempts. It was ${randomNumber}`;
            descriptionEl.style.color = 'green';
            submitEl.style.display = "none";
            restartEl.style.display = "inline-block"
        }
        else{
            descriptionEl.innerHTML = `Sorry, You Loose. The number was ${randomNumber}`;
            descriptionEl.style.color = 'red';
            submitEl.style.display = "none";
            restartEl.innerHTML = `Play Again`;
            restartEl.style.display = "inline-block";
        }

    }
}

const validateInput = () => {
    const userInput = parseInt(inputEl.value);
    inputEl.value = "";
    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
        alert("Enter the valid number between 0 to 100");
    }
    else {
        numberGuess++;
        guessArray.push(userInput);
        let attLeft = 10 - numberGuess;
        attemptsEl.innerHTML = `Attempts left: ${attLeft}`
        let guesses = guessArray.toString();
        guessesEl.innerHTML = `Your Guesses: ${guesses}`;
        restartEl.style.display = "inline-block"
        checkInput(userInput, numberGuess);
    }
}

submitEl.addEventListener('click', validateInput);
restartEl.addEventListener('click', () => {
    numberGuess = 0;
    guessArray = [];
    attemptsEl.innerHTML = `Attempts left: 10`;
    descriptionEl.innerHTML = `Game restarted. You have 10 attempts.`;
    guessesEl.innerHTML = `Your Guesses: ...`;
    descriptionEl.style.color = "blue";
    restartEl.style.display = "none";
})
