'use strict';

// ! Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// let highScore = 0;

// // ! Handling Click Events

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   console.log(guess, typeof guess);

//   // ? No Input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number';

//     //? When the player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Number!';

//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';

//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = score;
//     }

//     // ? When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '⬆ To High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';

//       document.querySelector('.score').textContent = 0;
//     }

//     // ? When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '⬇ To Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   score = 20;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;

//   document.querySelector('body').style.backgroundColor = '#222';

//   document.querySelector('.number').style.width = '15rem';
// });

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// const setMessage = str => {
//   document.querySelector('.message').textContent = str;
// };

// // ! Handling Click Events

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   console.log(guess, typeof guess);

//   // ? No Input
//   if (!guess) {
//     setMessage('⛔ No Number');

//     //? When the player wins
//   } else if (guess === secretNumber) {
//     setMessage('🎉 Correct Number!');

//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';

//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = score;
//     }

//     // ? When guess not equal
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       setMessage(guess > secretNumber ? '⬆ To High' : '⬇ To Low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       setMessage('💥 You lost the game');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   score = 20;
//   setMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;

//   document.querySelector('body').style.backgroundColor = '#222';

//   document.querySelector('.number').style.width = '15rem';
// });

// !  Declaring Variables

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

// ! Declaring Functions

// ! Message Function
const displayMessage = str => (messageEl.textContent = str);

// !  Style Function
const setStyle = (width, backgroundColor) => {
  numberEl.style.width = width;
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

// !  Game logic Function

const gameLogic = () => {
  const guess = Number(document.querySelector('.guess').value);

  // !  When user enter no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else {
    // !  When guess equal to secret number
    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number');
      setStyle('30rem', '#60b347');
      numberEl.textContent = secretNumber;

      // !  creating Logic for high score
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = score;
      }

      // !  When guess not equal to secret number
    } else if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent =
        guess > secretNumber ? '⬆ Too High!' : '⬇ Too Low!';
    } else {
      displayMessage('💔 You Lose the game!');
      scoreEl.textContent = 0;
    }
  }
};

// !  Resetting the game
const resetGame = () => {
  displayMessage('Start guessing...');
  setStyle('15rem', '#222');
  document.querySelector('.guess').value = '';
  score = 20;
  scoreEl.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberEl.textContent = '?';
};

// ! Even handler

btnCheck.addEventListener('click', gameLogic);

btnAgain.addEventListener('click', resetGame);
