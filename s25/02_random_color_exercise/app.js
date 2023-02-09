const button = document.querySelector("button");
const h1 = document.querySelector("h1");

function generate_color() {
    // returns string of form `rgb(#,#,#)`
    const nums = [];
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 255);
        nums.push(num);
    }
    return `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`
}

function assign_color_value() {
    const newColor = generate_color();

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
}

button.addEventListener("click", assign_color_value);