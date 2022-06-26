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

function roundCount(outCome){
    if(outCome.substring(0,7) == "You win"){
        // console.log("Outcome Log: ", outCome,outCome.substring(0,7))
        return [1,0];
    } else if(outCome.substring(0,8) == "You lose"){
        // console.log("Outcome Log: ", outCome,outCome.substring(0,8))
        return [0,1];
    }else {
        return [0,0];
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){    
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = computerPlay();
        let scores = roundCount(playRound(playerSelection, computerSelection))
        playerScore = playerScore + Number(scores[0]);
        computerScore = computerScore + Number(scores[1]);
        playRound(playerSelection, computerSelection)
        console.log(i, playerSelection, computerSelection, scores, `Playerscore: ${playerScore}`, `Computerscore: ${computerScore}`,  playRound(playerSelection, computerSelection))
    }
    if(playerScore > computerScore){
        return "Player wins!"
    } 
    if(playerScore < computerScore){
        return "Computer wins!"
    } else {
        return "Draw!"
    }
}

game()