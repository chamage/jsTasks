// -- Rock, Paper, Scissors Game Task--
// Implements a console-based Rock, Paper, Scissors game

const prompt = require('prompt-sync')();

function rockPaperScissors() {
    let playerPoints = 0; // Player's score
    let computerPoints = 0; // Computer's score
    
    const options = { // Mapping of choices
        '1': 'Rock',
        '2': 'Paper',
        '3': 'Scissors'
    };
    const optionKeys = Object.keys(options); // ['1', '2', '3']

    console.log("--- Task 4: Rock, Paper, Scissors Game ---");
    console.log("Rules: 1 - Rock, 2 - Paper, 3 - Scissors. Type 'q' or 'exit' to quit.");

    while (true) { // Game loop
        const playerChoiceStr = prompt(`ROUND! (1, 2, 3 or 'q'):`); // Get player's choice
        if (playerChoiceStr === null || ['q', 'exit'].includes(playerChoiceStr.toLowerCase())) { // Check exit conditions
            break; // End the game
        }

        if (!optionKeys.includes(playerChoiceStr)) { // Validate input
            console.log("Invalid choice, please try again."); 
            continue; // Prompt again
        }

        const playerChoice = parseInt(playerChoiceStr); // Convert player's choice to integer
        
        const computerChoice = Math.floor(Math.random() * 3) + 1; // Random choice for computer (1-3)

        console.log(`\n--- Round ---`);
        console.log(`Player chose: ${options[playerChoice]}`);
        console.log(`Computer chose: ${options[computerChoice]}`);
        if (playerChoice === computerChoice) { // Tie condition
            console.log("Result: It's a tie!");
        } 
        else if (
            (playerChoice === 1 && computerChoice === 3) || // Rock > Scissors
            (playerChoice === 2 && computerChoice === 1) || // Paper > Rock
            (playerChoice === 3 && computerChoice === 2)    // Scissors > Paper
        ) { // Player win conditions
            console.log("Result: You won the round!");
            playerPoints++;
        } 
        else { // Computer win conditions
            console.log("Result: Computer won the round!");
            computerPoints++;
        }

        console.log(`Score: Player ${playerPoints} - ${computerPoints} Computer\n`);
    }

    console.log("\n--- Game Over ---");
    console.log(`Final score: Player ${playerPoints} - ${computerPoints} Computer`);
}

rockPaperScissors();