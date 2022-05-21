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
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5)
    {
        const result = document.getElementById('result');
        result.textContent = "Computer Won!"
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

    const playerDisplay = document.getElementById('playerSelection');
    playerDisplay.textContent = playerSelection;

    const computerDisplay = document.getElementById('computerSelection');
    computerDisplay.textContent = computerSelection;

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

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i< 5;i++){
        let userInput = prompt("Choose Rock, Paper or Scissors");
        let result = playRound(userInput,computerPlay());
        if (result == 1)
        {
            console.log("You Won the Round");
            playerScore++;
        }
        else if(result == -1)
        {
            console.log("You Lost the Round");
            computerScore++;
        }
        else if(result == 0){
            console.log("It's a Tie!");
        }
        
    }
    console.log("The Final Score Was You: " + playerScore + ", The Computer: " + computerScore);
}

const buttons = document.querySelectorAll('btn');
buttons.forEach(addEventListener('click', (e) => {
    let playerSelection = e.target.id;
    playRound(playerSelection, computerPlay());
    return;
}));