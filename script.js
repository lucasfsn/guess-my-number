'use strict';

// ------------------------------ //
// ------------ GAME ------------ //
// ------------------------------ //

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let value = 20;
let highscore = 0;

const scoreText = function (score) {
  document.querySelector('.score').textContent = score;
};

const messageText = function (message) {
  document.querySelector('.message').textContent = message;
};

const changingColors = function (bgcColor, numberColor) {
  document.querySelector('.number').style.backgroundColor = bgcColor;
  document.querySelector('.number').style.color = numberColor;
};

document.querySelector('.check').addEventListener('click', function () {
  const myNumber = document.querySelector('.guess').value;
  if (!myNumber) {
    messageText('Enter the number.');
    scoreText(value);
  } else if (value > 1) {
    if (Number(myNumber) === randomNumber) {
      messageText('You guessed the number. Good job!');
      document.querySelector('.number').textContent = myNumber;
      changingColors('blue', 'white');
      if (value > highscore) {
        highscore = value;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (myNumber !== randomNumber) {
      messageText(
        myNumber > randomNumber
          ? 'Your number is too high.'
          : 'Your number is too low.'
      );
      value--;
      scoreText(value);
    }
  } else {
    scoreText(0);
    messageText('Game over');
    changingColors('red', 'white');
    document.querySelector('.number').textContent = '☹';
  }
});

// AGAIN
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  value = 20;
  messageText('Start guessing...');
  scoreText(20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  changingColors('rgb(255, 217, 0)', 'black');
  document.querySelector('.number').style.width = '15rem';
});
