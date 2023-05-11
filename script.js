const container = document.querySelector(".container");

const defaultGridWidth = 16;
const containerWidth = 960;
const gridSize = defaultGridWidth * defaultGridWidth;

container.style.width = containerWidth + "px";

for(let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.className = "grid";
    div.style.width =  containerWidth / defaultGridWidth + "px";
    div.style.height =  containerWidth / defaultGridWidth + "px";
    container.appendChild(div);

}

const gridItem = document.getElementsByClassName("grid");


for(let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener("mouseover", 
    (() => gridItem[i].style.backgroundColor = "blue"))
}