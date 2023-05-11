const container = document.querySelector(".container");
const adjustSizeButton = document.createElement("button");

adjustSizeButton.textContent = "Adjust Grid Size";
container.parentElement.insertBefore(adjustSizeButton, container);

const gridWidth = 64;
const containerWidth = 960;
const gridSize = gridWidth * gridWidth;

container.style.width = containerWidth + "px";

for(let i = 1; i < gridSize+1; i++) {
    const div = document.createElement("div");
    div.className = "grid";
    div.style.borderTop = "1px solid black";
    div.style.borderLeft = "1px solid black";
    if(i===gridSize) {
        div.style.borderRight = "1px solid black";
        div.style.borderBottom = "1px solid black";
    }
    else if(i % gridWidth === 0) {
        div.style.borderRight = "1px solid black";
    }
    else if (i > gridSize - gridWidth) {
        div.style.borderBottom = "1px solid black";
    }
    div.style.width =  containerWidth / gridWidth + "px";
    div.style.height =  containerWidth / gridWidth + "px";
    container.appendChild(div);

}

const gridItem = document.getElementsByClassName("grid");


for(let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener("mouseover", 
    (() => gridItem[i].style.backgroundColor = "blue"))
}