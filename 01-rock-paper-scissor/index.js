// create a function computerPlay that will randomly return
// Rock, Paper, Scissor
function computerPlay() {
  // generate a random number out of [0,1,2]
  let randomNumber = Math.floor(Math.random() * 3);

  // store rock paper scissor in an array
  let gameOptions = ['Rock', 'Paper', 'Scissor'];

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
    alert('There is a tie!');
    return 'Tie';
  } else {
    if (
      (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Scissor' && computerSelection === 'Paper')
    ) {
      alert(`You Won! ${playerSelection} beats ${computerSelection}`);
      return 'Player';

      alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
      alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
      return 'Computer';
    }
  }
}

// console.log(playRound('scissor', computerPlay()));

// new function: game()
// game will call playRound() function to play a 5 round game
// it will also keep score and will report a winner or loser at the end
// use console.log() to display the result of each round and the winner at the end
// use prompt() to get input from the user

// you might have to change the return value to something more useful

// game function will call playRound()  5 times using a for loop
// and set the scores of each player to 0
// in each loop
// we prompt the user to give its input and generate an output from computerPlay()
// we then feed this to playRound() and expect a useful output
// we can console log the result of each round and update the scores of winning player
// once the loop is finished, we can compare the score and return the winner

function game(games = 5) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < games; i++) {
    let winner = playRound(prompt('Rock, Paper or Scissor?'), computerPlay());

    // Update scores
    if (winner === 'Player') {
      playerScore += 1;
    } else if (winner === 'Computer') {
      computerScore += 1;
    }

    // Declare the score
    console.log(
      `Player Score: ${playerScore}, Computer Score ${computerScore}`
    );
  }
  // declare the winner
  if (playerScore > computerScore) {
    console.log('You Won! Congratulations!');
  } else if (playerScore < computerScore) {
    console.log('Computer Won! Better luck next time.');
  } else {
    console.log('Uh Oh! There is a tie.');
  }
}

game();
