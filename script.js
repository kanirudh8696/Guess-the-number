'use strict';

let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Check if guess number is between 1 and 20 inclusive.
  if (guess >= 1 && guess <= 20) {
    //   No Number
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔ No Number';
      displayMessage('⛔ No Number');
      // Wins
    } else if (guess === secertNumber) {
      //  document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secertNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
    // Wrong Guess
    else if (guess !== secertNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > secertNumber ? ' 📈 Too High!' : ' 📉 Too Low!';
        displayMessage(guess > secertNumber ? ' 📈 Too High!' : ' 📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = ' 👾 You Lost the Game';
        displayMessage(' 👾 You Lost the Game');
        document.querySelector('.score').textContent = 0;
      }
    }
  } else {
    displayMessage('🤔 Please Enter a valid number between 1 and 20 !!');
  }

  // Guess is high
  // else if (guess > secertNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 👾 You Lost the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // Guess is Low
  // } else if (guess < secertNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 👾 You Lost the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = '🤔Start guessing...';
  displayMessage('🤔Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

