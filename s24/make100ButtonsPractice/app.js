// WRITE YOUR CODE IN HERE:

const mainDiv = document.querySelector("#container")

for (let i = 0; i < 100; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = "hello world";
    mainDiv.appendChild(newButton);
}

// have to create a new button each time,
// because if try to append same button 100x
// only appends button 1x