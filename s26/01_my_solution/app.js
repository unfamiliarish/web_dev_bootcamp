// scores
let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");
const goalScoreDropdown = document.querySelector("#goalScore");
let goalScore;

// buttons
const score1Plus = document.querySelector("#score1Plus");
const score2Plus = document.querySelector("#score2Plus");
const reset = document.querySelector("#reset");


let score1 = 0;
let score2 = 0;

score1Plus.addEventListener("click", () => {
    player1Score.innerText = score1 + 1;
    score1++;

    goalScoreDropdown.disabled = true;
    goalScore = goalScoreDropdown.value;

    score1 == goalScore && endGame();
});

score2Plus.addEventListener("click", () => {
    player2Score.innerText = score2 + 1;
    score2++;

    goalScoreDropdown.disabled = true;
    goalScore = goalScoreDropdown.value;

    score2 == goalScore && endGame();
});

reset.addEventListener("click", () => {
    player1Score.innerText = player2Score.innerText = 0;
    score1 = score2 = 0;

    for (let element of [goalScoreDropdown, score1Plus, score2Plus]) {
        element.disabled = false;
    }

    player1Score.classList.remove("winner", "loser");
    player2Score.classList.remove("winner", "loser");
});

function endGame() {
    // ends the game
    score1Plus.disabled = true;
    score2lus.disabled = true;

    const score1 = player1Score.innerText;
    const score2 = player2Score.innerText;

    const winner = score1 > score2 ? player1Score : player2Score;
    const loser = score1 < score2 ? player1Score : player2Score;
    winner.classList.add("winner");
    loser.classList.add("loser");
};

setMaxHeight(score1Plus, score2Plus, reset);

window.addEventListener("resize", () => {
    resetHeight(score1Plus, score2Plus, reset);
    setMaxHeight(score1Plus, score2Plus, reset);
});

function setMaxHeight(...buttons) {
    let max = 0;
    for (let button of buttons) {
        let height = window.getComputedStyle(button).height;
        height = parseInt(height.slice(0, -2))
        height > max && (max = height);
    }
    for (let button of buttons) {
        button.style.height = `${max}px`;
    }
}

function resetHeight(...buttons) {
    for (let button of buttons) {
        button.style.height = "";
    }
}