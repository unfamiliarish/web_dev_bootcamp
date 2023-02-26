const p1 = {
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
    score: 0
}
const p2 = {
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
    score: 0
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
let winningScore = 3;
let isGameOver = false;

p1.button.addEventListener("click", () => {
    updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
    updateScore(p2, p1);
});

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        player.display.innerText = player.score;

        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    resetPlayer(p1);
    resetPlayer(p2);
}

function resetPlayer(player) {
    player.score = 0;
    player.display.innerText = 0;
    player.display.classList.remove("has-text-success", "has-text-danger");
    player.button.disabled = false;
}