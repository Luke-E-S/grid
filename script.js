const container = document.querySelector(".container");

for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.className = "grid";
    container.appendChild(div);

}

const gridItem = document.getElementsByClassName("grid");


for(let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener("mouseover", 
    (() => gridItem[i].style.backgroundColor = "blue"))
}