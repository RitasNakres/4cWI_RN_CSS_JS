let opponentSelection;
let playerSelection;
let result;
let isWaiting = false;


const opponentOptions = ['Stein',
    'Papier',
    'Schere'];

function playGame(player) {
    playerSelection = player;
    isWaiting = true;
    showIsWaiting();
    setTimeout(play, 2000);
}

function showIsWaiting() {
    if (isWaiting) {
        document.getElementById("opponent-btn").innerHTML = '<img src="./images/Schere.png"/>';
        setTimeout(() => { document.getElementById("opponent-btn").innerHTML = '<img src="./images/Stein.png"/>'; }, 500);
        setTimeout(() => { document.getElementById("opponent-btn").innerHTML = '<img src="./images/Papier.png"/>'; }, 1000);
    } else {
        document.getElementById("opponent-btn").innerHTML = "";
    }
}

const play = () => {
    isWaiting = false;
    showIsWaiting();
    opponentSelection = generateOpponentSelection();
    displayOpponentSelection();
    console.log();
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

function displayResult() {
    setTimeout(() => document.getElementById("gameResult").innerHTML = result, 300)
}
