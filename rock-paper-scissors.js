function getComputerChoice () {
    let num = Math.random()*3
    if (num >= 2) {
        return "scissors"
    } else if (num >= 1) {
        return "paper"
    } else {
        return "rock"
    }
}

function gethumanchoice() {
    let choice = prompt("Choose among rock, paper, scissors:");
    if (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors"){
        return "Oops, that's not among the options! "
    } 
    return choice
}

// humanScore = 0;
// computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper") {
        console.log("You lose! Scissors beats paper.");
        computerScore ++
    } else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "scissors") {
        console.log("Welp, that's a tie!");
    } else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "rock") {
        console.log("You win! rock beats scissors!");
        humanScore ++
    } else if (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") {
        console.log("You lose! paper beats paper.");
        computerScore ++
    } else if (computerChoice === "paper" && humanChoice.toLowerCase() === "paper") {
        console.log("Welp, that's a tie!");
    } else if (computerChoice === "paper" && humanChoice.toLowerCase() === "scissors") {
        console.log("You win! scissors beats paper.");
        humanScore ++
    } else if (computerChoice === "rock" && humanChoice.toLowerCase() === "rock") {
        console.log("Welp, that's a tie!");
    } else if (computerChoice === "rock" && humanChoice.toLowerCase() === "paper") {
        console.log("You win! paper beats rock.");
        humanScore ++
    } else if (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") {
        console.log("You lose! rock beats scissors.");
        computerScore ++
    } else {
        console.log("please try again.")
    }
}

// const humanSelection = gethumanchoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame () {
    humanScore = 0;
    computerScore = 0;
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()

    console.log(humanScore, computerScore);
}