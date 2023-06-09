const container = document.querySelector(".container");
const adjustSizeButton = document.createElement("button");

adjustSizeButton.textContent = "Adjust Grid Size";
adjustSizeButton.addEventListener("click", () => {getGridSize()});
container.parentElement.insertBefore(adjustSizeButton, container);

const gridWidth = 16;
const containerWidth = 640;
const gridSize = gridWidth * gridWidth;

container.style.width = containerWidth + "px";

function removeGrid() {
    const div = document.querySelectorAll(".grid");
    for(i = 0; i < div.length; i++) 
    {
        div[i].parentNode.removeChild(div[i]);
    }
}
let color = 999;
function getColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "" + r +"," + g + "," + b;
}
function addEvents() {
    /* array used to add events tot he grid for painting */
    const gridItem = document.querySelectorAll(".grid");
    for(let i = 0; i < gridItem.length; i++){
        gridItem[i].addEventListener("mouseover", 
        (() =>  {
            color = getColor();
            gridItem[i].style.backgroundColor = "rgb("+color+")";
        }))
    }
}

function getGridSize() {
    /**prompt user for a grid size GL GL */
    choice = prompt("What grid size would you like?" +
    " (multiples of 8, no bigger than 100)");
    if (choice % 8 !== 0) {
        choice = prompt("Please pick a multiple of 8");
    }
    if (choice > 99) {
        choice = prompt("please pick a number lower than 100");
    }
    removeGrid();
    createGrid(choice, choice*choice);    
    addEvents();
}

function createGrid(width, size) {
        /*  create the grid of divs, give them a class for style */
    for(let i = 1; i < size+1; i++)
    {
        const div = document.createElement("div");
        div.className = "grid";
        div.style.backgroundColor = "white";
        /* display borders without any sides touching eachother */
        div.style.borderTop = "1px solid black";
        div.style.borderLeft = "1px solid black";
    
        if (i > size - width) /* give bottom a border */
        {
            div.style.borderBottom = "1px solid black";
        }
        if(i % width === 0) /* give right side a border */
        {
            div.style.borderRight = "1px solid black";
        }
        div.style.width =  containerWidth / width + "px";
        div.style.height =  containerWidth / width + "px";
        container.appendChild(div);
    }
}

createGrid(gridWidth, gridSize);
addEvents();

