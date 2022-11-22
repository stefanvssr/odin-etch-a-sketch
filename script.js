const gridContainer = document.querySelector(".container");
const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");
let gridXY = 16;

// We need to put an event listener on the container of the items,
// Otherwise we can't target dynamically items.
// This is because of event delegation.
gridContainer.addEventListener("mouseover", hoverItem);

function calcGrid() {
    return gridXY * gridXY;
}

function createGrid() {

    let totalGridItems = calcGrid();

    for (let i = 1; i <= totalGridItems; i++) {
        gridContainer.appendChild(gridItem.cloneNode(true));
    }
}

function hoverItem(e) {
    
    // We only want to target elements with the class of .grid-item
    // This is because of event bubbeling
    if(e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = "#000000";
    }
}

createGrid();