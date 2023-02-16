// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const groceryList = document.querySelector("#list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = form.elements.product;
    const quantity = form.elements.qty;
    const productString = `${quantity.value} ${product.value}`

    const groceryLI = document.createElement("li");
    groceryLI.innerText = productString;
    console.log(groceryLI);

    groceryList.appendChild(groceryLI);
    product.value = "";
    quantity.value = "";
});