// pokemon imgs url, replace 1 to get different sprites
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png 
const basePokemonUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const container = document.querySelector("#pokemon");
container.classList.add("d-flex", "flex-wrap");

for (let i = 1; i <= 151; i++) {
    const newFigure = document.createElement("figure");
    newFigure.classList.add(
        "col",
        "figure-image",
        "img-fluid",
        "img-rounded",
        "img-thumbnail",
        "bg-secondary-subtle",
        "text-center",
        "m-1",
    );


    // figure image
    const newImg = document.createElement("img");
    newImg.src = `${basePokemonUrl}${i}.png`;
    // figure caption
    const newCaption = document.createElement("figcaption");
    newCaption.classList.add("figure-caption");
    newCaption.innerText = `#${i}`;

    newFigure.append(newImg, newCaption);
    container.appendChild(newFigure);
}
