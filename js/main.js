// Create an array of selections for the computer to choose from
const selections = ["ROCK", "PAPER", "SCISSORS"]

// Create an array of selections to anlyze wins and losses
const win_loss = ["ROCK-SCISSORS", "PAPER-ROCK", "SCISSORS-PAPER", "SCISSORS-ROCK", "ROCK-PAPER", "PAPER-SCISSORS"]

// Returns a random number
function computerSelection(){
    return selections[Math.floor(Math.random() * selections.length)]
}

// Allows input from user and accepts strings
function playerSelection(){
    return window.prompt("Choose Rock, Paper or Scissors").toUpperCase();
}

// Compares player and comp choices to tell who won a round
function playRound(player_selection, comp_selection){
    // Formats the inputs to deduce who wins the round
    var combined_selection = player_selection +"-" +comp_selection

    // Gets index of the combined selection
    item_index = win_loss.indexOf(combined_selection)

    // Uses if statement to compare indices and deduce who wins a round
    if (player_selection === comp_selection){
        return "The round was a tie!"
    } else{
        if (item_index > 2){
            return "You lost! " +comp_selection +" beats " +player_selection
        } else if (item_index <= 2){
            return "You won! " +player_selection  +" beats " +comp_selection 
        } else {
            return "Invalid selection"
        }
    }
}


function game() {
    // Variables to tally wins/losses
    var comp_wins = 0, player_wins = 0

    // For loop to facilitate 5 rounds of games
    for (i = 0; i < 5; i++) {
        var result = playRound(playerSelection(), computerSelection())
        console.log(result);
        if (result.includes("won", 0)){
            player_wins ++
        } else if (result.includes("lost", 0)) {
            comp_wins ++
        }
    }

    //Ternary shorthand operator to output who won most of the five rounds
    return (player_wins > comp_wins) ? "Congratulations! You won " +player_wins +" : " +comp_wins 
        : (player_wins === comp_wins) ? "The Game ended as a draw " +player_wins +" : " +comp_wins  
        : "Sorry, You Lost " +player_wins +" : " +comp_wins  
}