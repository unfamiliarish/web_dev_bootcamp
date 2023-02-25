let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");

const score1Plus = document.querySelector("#score1Plus");
const score2Plus = document.querySelector("#score2Plus");
const reset = document.querySelector("#reset");

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
setMaxHeight(score1Plus, score2Plus, reset);

window.addEventListener("resize", (e) => {
    resetHeight(score1Plus, score2Plus, reset);
    setMaxHeight(score1Plus, score2Plus, reset);
});