const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

const winningScoreSelect = document.querySelector("#playTo");
let winningScore = 3;

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener("click", () => {
    if (!isGameOver) {
        p1Score++;
        p1Display.innerText = p1Score;

        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
    }
});

p2Button.addEventListener("click", () => {
    if (!isGameOver) {
        p2Score++;
        p2Display.innerText = p2Score;

        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
    }
});

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    p1Display.innerText = 0;
    p2Display.innerText = 0;

    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
}