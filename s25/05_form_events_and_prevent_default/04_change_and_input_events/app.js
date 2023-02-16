const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("change", function (e) {
    console.log(e.target.value);
})

// changes the h1 to match our input as we type
input.addEventListener("input", function (e) {
    console.log(e.target.value);
    h1.innerText = e.target.value;
})