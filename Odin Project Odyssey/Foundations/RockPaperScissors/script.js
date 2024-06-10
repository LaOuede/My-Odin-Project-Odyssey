// Options
const Options = ["Rock", "Paper", "Scissors"];

const winConditions = {
    "Rock": "Scissors",
    "Paper": "Rock",
    "Scissors": "Paper"
};

// Computer choice
function getComputerChoice() {
    return Options[Math.floor(Math.random() * Options.length)]
}

// Scores
let human_score = 0;
let computer_score = 0;

// Human choice
let human_choice = '';

const options = document.querySelector('#options');

options.addEventListener('click', (e) => {
    let choice = e.target;
    if ((human_score === 5) || (computer_score === 5)) {
        resetVariables();
    }
    playRound(choice.id);
});

// Play round
function playRound(human_selection) {
    const computer_selection = getComputerChoice();
    const play = document.querySelector('#play');
    play.innerHTML = '';
    
    const display_hsel = document.createElement('p');
    display_hsel.textContent = `You've selected ${human_selection}.`;
    
    const display_csel = document.createElement('p');
    display_csel.textContent = `Computer has selected ${computer_selection}.`;
    
    play.appendChild(display_hsel);
    play.appendChild(display_csel);

    const score = document.querySelector('#score');
    score.innerHTML = '';

    if (human_selection === computer_selection) {
        const display_tie = document.createElement('p');
        display_tie.textContent = "Oh no! It's a tie! Play again :)";
        play.appendChild(display_tie);

        const tie_display = document.createElement('p');
        tie_display.textContent = `${human_score} - ${computer_score}`;
        score.appendChild(tie_display);
    } else if (winConditions[human_selection] === computer_selection) {
        const winAction = document.createElement('p');
        winAction.textContent = `You win! ${human_selection} beats ${computer_selection}.`;
        play.appendChild(winAction);
        
        human_score++;
        const hs_display = document.createElement('p');
        hs_display.textContent = `${human_score} - ${computer_score}`;
        score.appendChild(hs_display);
    } else {
        const loseAction = document.createElement('p');
        loseAction.textContent = `You lose! ${computer_selection} beats ${human_selection}.`;
        play.appendChild(loseAction);
        
        computer_score++;
        const cs_display = document.createElement('p');
        cs_display.textContent = `${human_score} - ${computer_score}`;
        score.appendChild(cs_display);
    }
    
    if ((human_score == 5) || (computer_score == 5)) {
        display_win();
        const btn = document.createElement('button');
        btn.textContent = 'New game';
        win.appendChild(btn);

        btn.addEventListener('click', () => {
            resetVariables();
        });
    }
};

// Display win
function display_win() {
    win = document.querySelector('#win');

    const end = document.createElement('p');
    human_score > computer_score ? end.textContent = "You win the game!!!" : end.textContent = "You lose the game...";
    win.appendChild(end);
};

// Reset after a game
function resetVariables() {
    human_score = 0;
    computer_score = 0;

    const score = document.querySelector('#score');
    score.innerHTML = '';
    const play = document.querySelector('#play');
    play.innerHTML = '';
    const win = document.querySelector('#win');
    win.innerHTML = '';
}