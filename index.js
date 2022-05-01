function computerPlay(){
    let randNum;

    randNum = Math.random()*(3-1)+1;
    randNum = Math.floor(randNum);
    console.log(randNum);

    if (randNum == 1)
    {
        return "rock";
    }
    else if (randNum == 2)
    {
        return "paper";
    }
    else
    {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock")
    {
        if (computerSelection == "rock")
        {
            return 0;
        }
        else if (computerSelection == "paper")
        {
            return -1;
        }
        else {
            return 1;
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            return 1;
        }
        else if (computerSelection == "paper")
        {
            return 0;
        }
        else {
            return -1;
        }
    }
    else if (playerSelection == "scizzors")
    {
        if (computerSelection == "rock")
        {
            return -1;
        }
        else if (computerSelection == "paper")
        {
            return 1;
        }
        else {
            return 0;
        }
    }
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

game();

