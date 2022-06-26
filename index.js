function computerPlay(){
    let plays = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(Math.random() * 3)
    return plays[choice];
}

// computerPlay();