let max_num, answer;

while (!max_num) {
    max_num = parseInt(prompt("Enter the maximum number!"));
}

answer = Math.floor(Math.random() * max_num) + 1

let guess, num_guesses = 0;
while (guess !== answer) {
    num_guesses++;

    if (!guess || guess > max_num || guess < 1) {
        guess = parseInt(prompt(`Guess a number 1-${max_num}`));
    } else if (guess > answer) {
        guess = parseInt(prompt("Your number is too high!"));
    } else if (guess < answer) {
        guess = parseInt(prompt("Your number is too low!"));
    }
}

alert(`You got it in ${num_guesses} guesses!`);

