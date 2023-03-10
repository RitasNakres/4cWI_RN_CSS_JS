let opponentSelection;
let playerSelection;
let result;
const opponentOptions = ['Stein',
    'Papier',
    'Schere'];

function playGame(player) {
    playerSelection = player;
    opponentSelection = generateOpponentSelection();
    displayOpponentSelection();
    determineResult();
    displayResult();
}

function generateOpponentSelection() {
    return opponentOptions[Math.floor(Math.random() * opponentOptions.length)];
}

function displayOpponentSelection() {
    const opponentBtn = document.getElementById('opponent-btn');
    opponentBtn.innerHTML = `<img src="./images/${opponentSelection}.png" alt="Opponent">`;
}

function determineResult() {
    if (playerSelection === 'Stein') {
        if (opponentSelection === 'Stein') {
            result = 'draw';
        } else if (opponentSelection === 'Papier') {
            result = 'loose';
        } else if (opponentSelection === 'Schere') {
            result = 'win';
        }
    } else if (playerSelection === 'Papier') {
        if (opponentSelection === 'Stein') {
            result = 'win';
        } else if (opponentSelection === 'Papier') {
            result = 'draw';
        } else if (opponentSelection === 'Schere') {
            result = 'loose';
        }
    } else if (playerSelection === 'Schere') {
        if (opponentSelection === 'Rock') {
            result = 'loose';
        } else if (opponentSelection === 'Papier') {
            result = 'win';
        } else if (opponentSelection === 'Schere') {
            result = 'draw';
        }
    }
}
