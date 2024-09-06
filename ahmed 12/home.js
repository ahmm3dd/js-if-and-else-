// Prompt the user to enter their age
let userAge = prompt("Please enter your age:");

// Convert the input to a number (since prompt returns a string)
userAge = Number(userAge);

// Check if the input is a valid number
if (isNaN(userAge) || userAge <= 0) {
    alert("Please enter a valid age.");
} else if (userAge < 13) {
    alert("You are a child.");
} else if (userAge >= 13 && userAge < 20) {
    alert("You are a teenager.");
} else if (userAge >= 20 && userAge < 65) {
    alert("You are an adult.");
} else {
    alert("You are a senior.");
}
