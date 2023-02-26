const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let winningScore = 5;

let p1Score = 0;
let p2Score = 0;
let gameOver = false;

p1Button.addEventListener("click", () => {
    if (!gameOver) {
        p1Score++;
        p1Display.innerText = p1Score;

        if (p1Score === winningScore) {
            gameOver = true;

        }
    }
});

p2Button.addEventListener("click", () => {
    if (!gameOver) {
        p2Score++;
        p2Display.innerText = p2Score;

        if (p2Score === winningScore) {
            gameOver = true;

        }
    }
});


