const gridContainer = document.querySelector(".container");
const createGridItem = document.createElement("div");
createGridItem.classList.add("grid-item");
let gridXY = 16;

function calcGrid() {
    return gridXY * gridXY;
}

function createGrid() {

    let totalGridItems = calcGrid();

    for (let i = 1; i <= totalGridItems; i++) {
        gridContainer.appendChild(createGridItem.cloneNode(true));
        console.log(i);
    }
}

createGrid();