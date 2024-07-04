//console.log('Hello World!');

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <= 3) {
        return "ROCK";
    } else if (randomNumber > 3 && randomNumber < 6) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

//console.log(getComputerChoice());

function getHumanChoice () {
    let myChoice = prompt("input your choice");
        let newChoice = myChoice.toUpperCase(); 
        return newChoice;
    }

//console.log(getHumanChoice());



function checkWinner (humanChoice, computerChoice)  {
    if (humanChoice == computerChoice) {
        return "Tie";
    }
    else if (
        (humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "SCISSORS" && computerChoice == "PAPER") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK")
    ){
        return "Player";
    } else  {
        return "Computer";
    }
}

function playRound (humanSelection, computerSelection) {
  let result = checkWinner(humanSelection, computerSelection);
  if (result == "Tie") {
      alert("It's a Tie!!!");
    } else if (result == "Player") {
      alert(`You won!! ${humanSelection} beats ${computerSelection}`);
    } else {
      alert(`You lost!! ${computerSelection} beats ${humanSelection}`);
    }
}

function playGame () {
    let humanScore = 0, computerScore = 0;
    for  (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
     if (checkWinner(humanSelection, computerSelection) ==  "Player") {
        humanScore++;
     } else if (checkWinner(humanSelection, computerSelection) == "Computer")
        computerScore++;
    }
    alert("Game Over!!")
    if(humanScore > computerScore) {
        alert("Congratulations!! You've won this round!!");
    } else if (humanScore < computerScore) {
        alert("Sorry, You've lost this round");
    } else {
        alert("The round ends at a Tie!!");
    }
}

playGame();
