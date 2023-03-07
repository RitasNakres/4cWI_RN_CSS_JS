let opponentSelection;
let playerSelection;
let result;

function play(player) {
  playerSelection = player;
  opponentSelection = generateOpponentSelection();
  displayOpponentSelection();
  determineResult();
  displayResult();
}

function generateOpponentSelection() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function displayOpponentSelection() {
  const opponentBtn = document.getElementById('opponent-btn');
  opponentBtn.innerHTML = `<img src="${opponentSelection}.png" alt="Opponent">`;
  opponentBtn.style.animation = 'none';
}

function determineResult() {
  if (playerSelection === 'rock') {
    if (opponentSelection === 'rock') {
      result = 'draw';
    } else if (opponentSelection === 'paper') {
      result = 'loss';
    } else if (opponentSelection === 'scissors') {
      result = 'win';
    }
  } else if (playerSelection === 'paper') {
    if (opponentSelection === 'rock') {
      result = 'win';
    } else if (opponentSelection === 'paper') {
      result = 'draw';
    } else if (opponentSelection === 'scissors') {
      result = 'loss';
    }
  } else if (playerSelection === 'scissors') {
    if (opponentSelection === 'rock') {
      result = 'loss';
    } else if (opponentSelection === 'paper') {
      result = 'win';
    } else if (opponentSelection === 'scissors') {
      result = 'draw';
    }
  }
}

function displayResult() {
    if (result === 'win') {
      alert('You win!');
    } else if (result === 'loss') {
        alert('You lose!');
        } else if (result === 'draw') {
        alert('Draw!');
}
}
  