// -- Calculator task --
// User inputs operation and two numbers, then the program outputs the result

const prompt = require('prompt-sync')();

function calculator() {
    const operation = prompt("Enter the operation (+, -, *, /): "); // Get the operation from the user
    const a = parseFloat(prompt("Enter number A: ")); // Get the first number from the user
    const b = parseFloat(prompt("Enter number B: ")); // Get the second number from the user

    if (isNaN(a) || isNaN(b)) { // Validate inputs
        console.error("Invalid input. Please enter numbers.");
        return;
    }

    let result;

    switch (operation) {
        case '+': // Addition
            result = a + b;
            break;
        case '-': // Subtraction
            result = a - b;
            break;
        case '*': // Multiplication
            result = a * b;
            break;
        case '/': // Division
            if (b === 0) {
                console.error("Error: Cannot divide by zero.");
                return;
            }
            result = a / b;
            break;
        default: // Unknown operation
            console.error("Unknown operation.");
            return;
    }
    
    console.log(`Result: ${a} ${operation} ${b} = ${result}`); // Output the result
}

calculator();