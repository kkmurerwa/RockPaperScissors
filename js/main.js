const selections = ["ROCK", "PAPER", "SCISSORS"]
const win_loss = ["ROCK-SCISSORS", "PAPER-ROCK", "SCISSORS-PAPER", "SCISSORS-ROCK", "ROCK-PAPER", "PAPER-SCISSORS"]

function computerSelection(){
    return selections[Math.floor(Math.random() * selections.length)]
}

function playerSelection(){
    return window.prompt("Choose Rock, Paper or Scissors").toUpperCase();
}

function playRound(player_selection, comp_selection){
    var combined_selection = player_selection +"-" +comp_selection
    item_index = win_loss.indexOf(combined_selection)
    if (player_selection === comp_selection){
        return "The game was a tie!"
    } else{
        if (item_index > 2){
            console.log(combined_selection);
            return "You lost! " +comp_selection +" beats " +player_selection
        } else if (item_index <= 2){
            console.log(combined_selection);
            return "You won! " +player_selection  +" beats " +comp_selection 
        } else {
            return "Invalid selection"
        }
    }
}


function game() {
    var comp_wins = 0, player_wins = 0
    for (i = 0; i < 5; i++) {
        var result = playRound(playerSelection(), computerSelection())
        console.log(result);
        if (result.includes("won", 0)){
            player_wins ++
        } else if (result.includes("lost", 0)) {
            comp_wins ++
        }
    }

    //Ternary shorthand operator to output who won
    return (player_wins > comp_wins) ? "Congratulations! You won " +player_wins +" : " +comp_wins 
        : (player_wins === comp_wins) ? "The Game ended as a draw " +player_wins +" : " +comp_wins  
        : "Sorry, You Lost " +player_wins +" : " +comp_wins  
}