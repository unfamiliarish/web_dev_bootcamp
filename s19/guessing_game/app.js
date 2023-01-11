let max_num, answer;

while (!max_num) {
    max_num = parseInt(prompt("Enter the maximum number!"));
}

console.log(`max: ${max_num}`);
answer = Math.floor(Math.random() * max_num) + 1
console.log(`answer: ${answer}`);

let guess, num_guesses = 0;
while (parseInt(guess) !== answer) {
    console.log(`guess: ${guess}`);
    if (guess === "q") break;

    num_guesses++;
    guess = parseInt(guess)  // not necessary, helps with readability
    if (!guess || guess > max_num || guess < 1) {
        guess = prompt(`Guess a number 1-${max_num}`);
    } else if (guess > answer) {
        guess = prompt("Your number is too high!");
    } else if (guess < answer) {
        guess = prompt("Your number is too low!");
    }
}

if (guess === "q") {
    console.log("exited");
    alert("Successfully exited.");
} else {
    console.log(`${num_guesses} guesses!`);
    alert(`You got it in ${num_guesses} guesses!`);
}