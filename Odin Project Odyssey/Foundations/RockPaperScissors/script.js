// Options
const Options = ["Rock", "Paper", "Scissors"];

// Computer choice
function getComputerChoice() {
    return Options[Math.floor(Math.random() * Options.length)]
}

// Human choice
function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors ?").toLowerCase();
    const capitalized_choice = choice.charAt(0).toUpperCase() + choice.slice(1);

    return Options.includes(capitalized_choice) ? capitalized_choice : "Error - Invalid input";
}

// Play round
function playRound(human_choice, computer_choice) {
    if (human_choice === computer_choice) {
        console.log("Oh no! It's a tie! Play again :)");
        return null;
    }

    const winConditions = {
        "Rock": "Scissors",
        "Paper": "Rock",
        "Scissors": "Paper"
    };

    if (winConditions[human_choice] === computer_choice) {
        console.log(`You win! ${human_choice} beats ${computer_choice}.`);
        return 'human';
    } else {
        console.log(`You lose! ${computer_choice} beats ${human_choice}.`);
        return 'computer';
    }
}

// Play game
function playGame() {
    let human_rounds = 0;
    let computer_rounds = 0;
    
    for (let round = 1; round <= 5; round++) {
        console.log(`Round: ${round}`);
        let human_score = 0;
        let computer_score = 0;
        
        while ((human_score < 3) && (computer_score < 3)) {
            const human_selection = getHumanChoice();

            if (human_selection === "Error - Invalid input") {
                console.log("Error - Invalid input");
                continue;
            }

            console.log(`You've selected ${human_selection}`)
            const computer_selection = getComputerChoice();
            console.log(`Computer has selected ${computer_selection}`)

            const winner = playRound(human_selection, computer_selection);
            if (winner === 'human') {
                human_score++;
            } else if (winner === 'computer') {
                computer_score++;
            }
            console.log(`Your score: ${human_score} - Computer's score: ${computer_score}`)
            
            if (human_score === 3) {
                human_rounds++
                console.log(`You win the round! :) - Score is ${human_rounds} - ${computer_rounds}`)
            } else if (computer_score === 3) {
                computer_rounds++
                console.log(`Oh no! You lose the round :( - Score is ${human_rounds} - ${computer_rounds}`)
            }
        }
    }
    console.log(human_rounds > computer_rounds ? "You win the game!!!" : "You lose the game...")
}

playGame()