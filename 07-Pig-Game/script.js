'use strict';

// // ! Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// const diceEl = document.querySelector('.dice');

// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // ! Conditions
// let scores, currentScore, activePlayer, playing;

// const resettingPartOne = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');

//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');

//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };

// const changingActivePlayer = () => {
//   currentScore = 0;
//   document.querySelector(`#current--${activePlayer}`).textContent =
//     currentScore;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// resettingPartOne();

// ! Rolling dice functionality

// btnRoll.addEventListener('click', function () {
//   if (playing) {
// ! 1. Generating a random dice roll

//     const dice = Math.trunc(Math.random() * 6 + 1);

//     // ! 2. Display the dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

// ! 3. Check for rolled 1: if true then
//     if (dice !== 1) {
// ! Add to the next player

//       currentScore += dice;
//       document.querySelector(`#current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
// ! switch to next player

//       changingActivePlayer();
//     }
//   }
// });

// ! Holding the Current Score

// btnHold.addEventListener('click', function () {
//   if (playing) {
// ! 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     document.querySelector(`#score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     //!  2. Check if player's score is >= 100

//     if (scores[activePlayer] >= 100) {
//       // ! 3. Finish the game
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
// ! if not then switch to the next player
//       changingActivePlayer();
//     }
//   }
// });

// ! Reset the game
// btnNew.addEventListener('click', resettingPartOne);

// ! Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const currentScore0El = document.querySelector(`#current--0`);
const currentScore1El = document.querySelector(`#current--1`);

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// ! Conditions
let currentScore, activePlayer, scores, playing;

// ! initializing the game
const startGame = () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

startGame();

// ! Switching player functions
const switchingPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// !  Rolling the dice
btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // ! Check for rolled 1: if true then
    if (dice !== 1) {
      // ! Adding dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // ! Switching player
      switchingPlayer();
    }
  }
});

// ! holding the score
btnHold.addEventListener('click', () => {
  if (playing) {
    // ! Adding Current value to the main score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // ! if 100 then win

      // const player0El = document.querySelector('.player--0');
      // const player1El = document.querySelector('.player--1');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      playing = false;
    } else {
      // ! switch player

      switchingPlayer();
    }
  }
});

// ! Resetting the game

btnNew.addEventListener('click', startGame);
