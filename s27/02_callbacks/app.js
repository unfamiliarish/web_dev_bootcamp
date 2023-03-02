// console.log("sending request to server (first)");
// setTimeout(() => {
// console.log("data from server (third)");
// }, 3000);
// console.log("end of file (second)");


setTimeout(() => {
    document.body.style.backgroundColor = "red";
}, 1000);

/* -- this doesn't work, because callback time is the same -- */
// so after one second the screen changes from white to orange
// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
// }, 1000);

/* -- this is sorta fine, but annoying to write, read, and debug -- */
// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
// }, 3000);

/* -- Here is callback hell, but it works, and is math-wise simpler -- */

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 // etc
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

function delayedColorChange(newColor, millisecondDelay, doNext) {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, millisecondDelay)
};

// how do we call the next color change function? 
// how do we successfully pass in the color and time vars for execution?

// we can pass in our own callback, defined locally 
// but still have nested callbacks

// this pattern is super common
delayedColorChange("red", 1000, () => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("yellow", 1000, () => {
            delayedColorChange("green", 1000, () => {
                delayedColorChange("blue", 1000, () => { });
            });
        });
    });
});

/* -- sometimes the amount of time that it takes for a callback to complete
      is an unknown value, or might be variable -- */
searchMoviesAPI("amadeus", () => {
    saveToMyDB(movies, () => {
        // if it works, run this
    }, () => {
        // if it doesn't work, run this
    }, () => {
        // if API is down, or request failed
    });
});
