// create a function computerPlay that will randomly return
// Rock, Paper, Scissor
function computerPlay() {
  // generate a random number out of [0,1,2]
  let randomNumber = Math.floor(Math.random() * 3);

  // store rock paper scissor in an array
  let gameOptions = ['Rock', 'Paper', 'Scissors'];

  // use the random no as index to get a random value
  let computerChosenOption = gameOptions[randomNumber];

  // return it
  return computerChosenOption;
}

// function that will play a single round of rock paper scissors
// parameters: playerSelection, computerSelection
// return a string: "You Lose! Paper beats Rock"
//
function playRound(playerSelection, computerSelection) {
  // convert user input to capital case

  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.substring(1).toLowerCase();

  // compare the selections
  /* 
    if player selection === computer selection
        it's a tie
    else
        if 
        player selection = rock, computer selection = paper
        > computer wins ~ false
        player selection = rock, computer selection = scissor
        > player wins ~ true

        player selection = paper, computer selection = rock
        > player wins ~ true
        player selection = paper, computer selection = scissor
        > computer wins ~ false
        
        player selection = scissor, computer selection = rock
        > computer wins ~ false
        player selection = scissor, computer selection = paper
        > player wins ~ true


    */

  if (playerSelection === computerSelection) {
    return 'There is a tie!';
  } else {
    if (
      (playerSelection === 'rock' && computerSelection === 'scissor') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

console.log(playRound('scissor', computerPlay()));
