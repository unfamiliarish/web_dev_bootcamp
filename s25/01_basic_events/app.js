const btn = document.querySelector("#v2")

btn.onclick = () => {
    console.log("clicked the 2nd button")
}

function hello() {
    console.log("hello");
}

btn.onmouseover = hello;
btn.onmousedown = () => alert("hi");

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
    alert("clicked");
});

//

function twist() {
    console.log("twist")
}

function shout() {
    console.log("shout");
}

const tasBtn = document.querySelector("#tas");
// tasBtn.onclick = twist;
// tasBtn.onclick = shout;

tasBtn.addEventListener("click", twist, { once: true });
tasBtn.addEventListener("click", shout);


