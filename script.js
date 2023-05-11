const container = document.querySelector(".container");
const adjustSizeButton = document.createElement("button");

adjustSizeButton.textContent = "Adjust Grid Size";
container.parentElement.insertBefore(adjustSizeButton, container);

const gridWidth = 16;
const containerWidth = 640;
const gridSize = gridWidth * gridWidth;

container.style.width = containerWidth + "px";

function createGrid(width, size) {
        /*  create the grid of divs, give them a class for style */
    for(let i = 1; i < size+1; i++) {
        const div = document.createElement("div");
        div.className = "grid";
        
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


/* array used to add events tot he grid for painting */
const gridItem = document.getElementsByClassName("grid");
for(let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener("mouseover", 
    (() => gridItem[i].style.backgroundColor = "blue"))
}