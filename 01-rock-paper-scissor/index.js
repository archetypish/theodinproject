// create a function computerPlay that will randomly return
// Rock, Paper, Scissor
function computerPlay() {
  // generate a random number out of [0,1,2]
  let randomNumber = Math.floor(Math.random() * 3);

  // store rock paper scissor in an array
  let gameOptions = ['Rock', 'Paper', 'Scissors'];

  // use the random no as index to get a random value
  let = gameOptions[randomNumber];

  // return it
  return computerChosenOption;
}

// function that will play a single round of rock paper scissors
// parameters: playerSelection, computerSelection
// return a string: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  // convert inputs to lowercase so they are case insensitive

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // compare the selections
  /* 
    if player selection === computer selection
        it's a tie
    else
        if 
        player selection = rock, computer selection = paper
        > computer wins
        player selection = rock, computer selection = scissor
        > player wins 

        player selection = paper, computer selection = rock
        > player wins
        player selection = paper, computer selection = scissor
        > computer wins
        
        player selection = scissor, computer selection = rock
        > computer wins
        
        player selection = scissor, computer selection = paper
        > player wins


        rock < paper
        rock > scissor
        scissor > paper
    */
}
