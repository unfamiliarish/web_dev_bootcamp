// scores
let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");
const goalScoreDropdown = document.querySelector("#goalScore");
let goalScore;

// buttons
const score1Plus = document.querySelector("#score1Plus");
const score2Plus = document.querySelector("#score2Plus");
const reset = document.querySelector("#reset");

setMaxHeight(score1Plus, score2Plus, reset);

window.addEventListener("resize", () => {
    resetHeight(score1Plus, score2Plus, reset);
    setMaxHeight(score1Plus, score2Plus, reset);
});

score1Plus.addEventListener("click", () => {
    player1Score.innerText = parseInt(player1Score.innerText) + 1;
    goalScoreDropdown.setAttribute("disabled", "disabled");
    goalScore = goalScoreDropdown.value;

    player1Score.innerText == goalScore && endGame();
});

score2Plus.addEventListener("click", () => {
    player2Score.innerText = parseInt(player2Score.innerText) + 1;
    goalScoreDropdown.setAttribute("disabled", "disabled");
    goalScore = goalScoreDropdown.value;

    player2Score.innerText == goalScore && endGame();
});

reset.addEventListener("click", () => {
    player1Score.innerText = player2Score.innerText = 0;

    for (let element of [goalScoreDropdown, score1Plus, score2Plus]) {
        element.removeAttribute("disabled");
    }

    player1Score.classList.remove("winner", "loser");
    player2Score.classList.remove("winner", "loser");
});

function endGame() {
    // ends the game
    score1Plus.setAttribute("disabled", "disabled");
    score2Plus.setAttribute("disabled", "disabled");

    const score1 = player1Score.innerText;
    const score2 = player2Score.innerText;

    const winner = score1 > score2 ? player1Score : player2Score;
    const loser = score1 < score2 ? player1Score : player2Score;
    winner.classList.add("winner");
    loser.classList.add("loser");
};

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