document.querySelector("button").addEventListener("click", function (event) {
    console.log(event);
});

// const input = document.querySelector("input");
// input.addEventListener("keydown", function (e) {
//     // console.log("key down")
//     console.log(e);
// });

// input.addEventListener("keyup", function () {
//     console.log("key up")
// });

// used commonly in video game design
// window.addEventListener("keydown", function (event) {
//     console.log(event.code);
// });

window.addEventListener("keydown", function (evt) {
    switch (evt.code) {
        case "ArrowUp":
            console.log("up");
            break;
        case "ArrowDown":
            console.log("down");
            break;
        case "ArrowRight":
            console.log("right");
            break;
        case "ArrowLeft":
            console.log("left");
            break;
        default:
            console.log("ignored");
    }
})
