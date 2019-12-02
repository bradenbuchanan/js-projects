/*
Game function:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guesses remaining
- notify player of the correct answer if lose
- let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
}) 

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){

    gameOver(true, `${winningNum} is correct, you win!`);
  } else {
    // Wrong number
    // guessLeft = guessesLeft - 1;
    guessesLeft -= 1;
    if(guessesLeft === 0){
      // game over - lost
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

    } else {
      // game continues - answer wrong
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left` , 'red');

      // clear input
      guessInput.value = '';
    }
  }
});

// Game over
function gameOver(won, msg){

  let color;
  won === true ? color = 'green' : color = 'red';


  // Disable input
    guessInput.disabled = true;
    // border green to show win
    guessInput.style.borderColor = color;
    // text color
    message.style.color = color;
    // set message
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// set message 
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

// gett winning number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}