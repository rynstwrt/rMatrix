const numGridX = 16;
const numGridY = 16;

const grid = document.querySelector("#grid");
grid.style.flex = "5";

for (let y = 0; y < numGridY; ++y)
{
    for (let x = 0; x < numGridX; ++x)
    {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        grid.appendChild(square);

        const squareContent = document.createElement("div");
        squareContent.classList.add("grid-square-content");
        square.appendChild(squareContent);

        const index = y * numGridX + x;
        const rainbow = (360 * index / (numGridX * numGridY));
        console.log(rainbow);
        squareContent.style.backgroundColor = "hsl(" + rainbow + ", 80%, 50%";
    }
}