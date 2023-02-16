// const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const catList = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit");

    const cat = document.createElement("li");
    cat.innerText = input.value;

    // clear the input field after submit
    input.value = "";

    catList.appendChild(cat);
})

