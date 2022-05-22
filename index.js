let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function checkScore(){
    if (playerScore === 5)
    {
        const result = document.getElementById('result');
        result.textContent = "You Won!"
        alert("You Won!");
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5)
    {
        const result = document.getElementById('result');
        result.textContent = "Computer Won!"
        alert("You Lost!");
        playerScore = 0;
        computerScore = 0;
    }
}

function updateScore(roundWinner)
{
    const result = document.getElementById('result');
    if (roundWinner === 'Tie')
    {
        result.textContent = "It was a tie"
    }
    else
    {
        result.textContent = `${roundWinner} won the round!`
    }

    checkScore();

}

function playRound(playerSelection, computerSelection)
{

    const playerDisplay = document.getElementById('playerSelection').src=`img/${playerSelection}.svg`;
    const computerDisplay = document.getElementById('computerSelection').src=`img/${computerSelection}.svg`;

    let roundWinner = "";

    if (playerSelection === computerSelection)
    {
        roundWinner = "Tie";
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundWinner = "Player";
        playerScore++;

    }
    if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        roundWinner = "Computer";
        computerScore++;

    }

    let updatePlayerScore = document.getElementById('playerScore');
    updatePlayerScore.textContent = playerScore;

    let updateComputerScore = document.getElementById('computerScore');
    updateComputerScore.textContent = computerScore;
    
    updateScore(roundWinner);

}

const buttons = document.querySelectorAll('button')
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', (e) => {
    let playerSelection = e.target.id;
    playRound(playerSelection, computerPlay());
    return;
}));