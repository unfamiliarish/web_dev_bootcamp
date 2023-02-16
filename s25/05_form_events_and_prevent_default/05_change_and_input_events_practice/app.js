const h1 = document.querySelector("h1");
const username = document.querySelector("input");

username.addEventListener("input", (e) => {
    const inputUsername = e.target.value;

    if (!username.value) {
        h1.innerText = "Enter Your Username";
    } else {
        h1.innerText = `Welcome, ${inputUsername}`;
    }
});