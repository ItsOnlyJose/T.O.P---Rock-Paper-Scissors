function computerPlay(){
    let plays = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(Math.random() * 3)
    return plays[choice];
}

// computerPlay();

// function playRound(playerSelection, computerSelection) {
//     if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
//         return `You win! ${playerSelection} beats ${computerSelection}!`;
//     }else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
//         return `You lose! ${computerSelection} beats ${playerSelection}!`
//     }else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"){
//         return `Draw!`
//     }

//     if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
//         return `You lose! ${computerSelection} beats ${playerSelection}!`
//     }else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") {
//         return `Draw!`
//     }else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
//         return `You win! ${playerSelection} beats ${computerSelection}!`;
//     }

//     if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors"){
//         return `Draw!`
//     }else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
//         return `You win! ${playerSelection} beats ${computerSelection}!`;
//     }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
//         return `You lose! ${computerSelection} beats ${playerSelection}!`
//     }
// }

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection.toLowerCase() == "scissors"){
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }else if(computerSelection.toLowerCase() == "paper"){
            return `You lose! ${computerSelection} beats ${playerSelection}!`
        }  
    }

    if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection.toLowerCase() == "rock"){
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }else if(computerSelection.toLowerCase() == "scissors"){
            return `You lose! ${computerSelection} beats ${playerSelection}!`
        }  
    }
    
    if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection.toLowerCase() == "paper"){
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }else if(computerSelection.toLowerCase() == "rock"){
            return `You lose! ${computerSelection} beats ${playerSelection}!`
        }  
    }

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return `Draw!`
    }
}