function computerChooses() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomized = Math.floor(Math.random() * 3);
    return choices[randomized];
  }
  
  function compareChoices(playerChoice, computerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
  
    if (computerChoice === playerChoice) {
      return "tie";
    } else if (computerChoice === choices[0]) {
      if (playerChoice === choices[1]) {
        return "player";
      } else {
        return "computer";
      }
    } else if (computerChoice === choices[1]) {
      if (playerChoice === choices[2]) {
        return "player";
      } else {
        return "computer";
      }
    } else if (computerChoice === choices[2]) {
      if (playerChoice === choices[0]) {
        return "player";
      } else {
        return "computer";
      }
    }
  }
  
  function playRound(playerChoice) {
    const computerChoice = computerChooses();
    const result = compareChoices(playerChoice, computerChoice);
  
    if (result === "tie") {
      newElement("The player and computer both chose " + computerChoice + " for a tie.");
    } else if (result === "player") {
      newElement("The player wins! Computer chose " + computerChoice + " and the player chose " + playerChoice);
    } else {
      newElement("The computer wins! Computer chose " + computerChoice + " and the player chose " + playerChoice);
    }
  }
  const rockButton = document.getElementById('rock');
    rockButton.addEventListener('click', function() {
      playRound('Rock');
    });
  const paperButton = document.getElementById('paper');
    paperButton.addEventListener('click', function() {
      playRound('Paper');
    });
  
    const scissorsButton = document.getElementById('scissors');
    scissorsButton.addEventListener('click', function() {
      playRound('Scissors');
    });
  
  function newElement(result){ 
    const results = document.createElement('p');
    results.innerText = result;
    document.body.appendChild(results);
  }
  compareChoices();
  
  const resultsDiv = document.getElementById('results');
    resultsDiv.innertext = '';
  
  function playGame() {
    let playAgain = true;
    while (playAgain) {
      const playerChoice = prompt("Choose rock, paper, or scissors:");
      playRound(playerChoice);
      
      results.textContent = '';
      playerChoice.textContent = '';
      computerChoice.textContent = '';
      
      const response = prompt("Do you want to play again? (yes or no)");
      if (response.toLowerCase() !== "yes") {
        playAgain = false;
      }
    }
  }
  