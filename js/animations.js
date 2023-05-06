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
        squareContent.style.backgroundColor = "hsl(" + rainbow + ", 80%, 50%";
    }
}

function getPosition(el)
{
    let xPos = 0;
    let yPos = 0;

    while (el)
    {
        if (el.tagName === "body")
        {
            const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            const yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        }
        else
        {
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}

const staggerValue = 1000;
const opacityMin = .5;
const scaleMin = .5;

anime.timeline({
    targets: ".grid-square-content",
    easing: "easeInOutQuad",
    loop: true
}).add({
    opacity: [1, opacityMin, 1],
    scale: [1, scaleMin, 1],
    borderRadius: [0, "50%", 0],
    delay: anime.stagger([0, staggerValue], {grid: [16, 16]})
}).add({
    opacity: [1, opacityMin, 1],
    scale: [1, scaleMin, 1],
    borderRadius: [0, "50%", 0],
    delay: anime.stagger([staggerValue, 0], {grid: [16, 16]})
}).add({
    opacity: [1, opacityMin, 1],
    scale: [1, scaleMin, 1],
    borderRadius: [0, "50%", 0],
    delay: anime.stagger([0, staggerValue / 2], {grid: [16, 16], from: "center"})
}).add({
    opacity: [1, opacityMin, 1],
    scale: [1, scaleMin, 1],
    borderRadius: [0, "50%", 0],
    delay: anime.stagger([staggerValue / 2, 0], {grid: [16, 16], from: "center"})
});