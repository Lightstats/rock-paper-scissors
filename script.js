let human_score = 0
let computer_score = 0
let left_tries = 3

function playGame(choice){
    let human = choice
    let computer = computer_choice()
    console.log(computer)

    let scores = document.querySelector("#scores")
    let restart = document.querySelector("#restart")
    restart.style.display = "block"
    scores.style.display = "flex"
    
    let tries = document.querySelector("#tries")
    let results = document.querySelector("#results")
    let human_points = document.querySelector("#human")
    let comp_points = document.querySelector("#comp")
    if (human == "rock" && computer == "paper"){
        console.log("computer wins")
        results.innerHTML = "Paper beats rock. You lose!"
        computer_score += 1
        comp_points.innerHTML = computer_score
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "rock" && computer == "scissors"){
        console.log("you win")
        results.innerHTML = "Rock beats scissors. You win!"
        human_score += 1
        human_points.innerHTML = human_score
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "rock" && computer == "rock"){
        console.log("Tie")
        results.innerHTML = "That's a tie!"
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "paper" && computer == "rock"){
        console.log("you win")
        results.innerHTML = "Paper beats rock. You win!"
        human_score += 1
        human_points.innerHTML = human_score
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "paper" && computer == "scissors"){
        console.log("computer wins")
        results.innerHTML = "Scissors beats paper. You lose!"
        computer_score += 1
        comp_points.innerHTML = computer_score
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "paper" && computer == "paper"){
        console.log("Tie")
        results.innerHTML = "That's a tie!"
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "scissors" && computer == "scissors"){
        console.log("Tie")
        results.innerHTML = "That's a tie!"
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "scissors" && computer == "paper"){
        console.log("you win")
        results.innerHTML = "Scissors beats paper. You win!"
        human_score += 1
        human_points.innerHTML = human_score
        left_tries -= 1
        tries.innerHTML = left_tries
    } else if (human == "scissors" && computer == "rock"){
        console.log("computer wins")
        results.innerHTML = "Rock beats scissors. You lose!"
        computer_score += 1
        comp_points.innerHTML = computer_score
        left_tries -= 1
        tries.innerHTML = left_tries
    } else {
        results.innerHTML = "sigh"
    }

    if(left_tries == 0){
        let buttons = document.querySelectorAll(".all button")

        buttons.forEach(button => {
            button.disabled = true
            button.style.color = "gainsboro"
            button.style.backgroundColor = "white"
            button.style.border = "5px gainsboro"
        })
        if (computer_score < human_score){
            results.innerHTML = `You won with ${human_score} points!`
        } else if(computer_score > human_score){
            results.innerHTML = `You lost to a pile of metal lol!`
        } else if (computer_score == human_score){
            results.innerHTML = "I guess you are tied...together!"
        }
    }
}

function computer_choice(){
    let num = Math.floor(Math.random()*3)
    console.log(num)
    if (num == 0){
        return "rock"
    } else if(num == 1){
        return "paper"
    } else if (num == 2){
        return "scissors"
    } else {
        console.log("Welp do i have news for you")
    }
}

function begin_again(){
    left_tries = 3
    let tries = document.querySelector("#tries")
    let buttons = document.querySelectorAll(".all button")

    buttons.forEach(button => {
            button.addEventListener("mouseenter", () => {
                button.style.backgroundColor = "black"
                button.style.color = "white"
                button.style.transform = "scale(1.1)"
            })
            button.addEventListener("mouseleave", () => {
                button.style.color = "black"
                button.style.backgroundColor = "rgb(73, 182, 255)"
                button.style.transform = "scale(1)"
            })
            button.disabled = false
            button.style.color = "black"
            button.style.backgroundColor = "rgb(73, 182, 255)"
    })
    

    tries.innerHTML = left_tries
    let scores = document.querySelector("#scores")
    let results = document.querySelector("#results")
    scores.style.display = "none"
    results.innerHTML = ""
    human_score = 0
    computer_score = 0
}