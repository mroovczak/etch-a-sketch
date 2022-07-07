function makeGrid(size=16) {
    deleteGrid();
    let canvas = document.querySelector("#canvas");
    for(let w=0; w<size; w++){
        for(let h=0; h<size; h++){
            let div = document.createElement("div");
            
            div.style.width = `${100/size}%`
            div.style.height = `${100/size}%`
            div.id = `pixel-w${w}-h${h}`;
            div.className = `pixel`;
            canvas.appendChild(div);
        }
    }
    let grid = document.querySelectorAll(".pixel");
    console.log(grid);
    grid.forEach(pixel => {
        pixel.addEventListener("mouseover",paintPixel);
        pixel.addEventListener("mousedown",paintPixel);
        // console.log(pixel);
    });

}
function clearGrid (){
    let grid = document.querySelectorAll(".pixel");
    grid.forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
}
function deleteGrid (){
    let grid = document.querySelectorAll(".pixel");
    grid.forEach(pixel => {
        pixel.remove();
    });
}
function paintPixel (e) {
    console.log(e);
    let pixel = e.target;
    if (e.buttons == 1){
        pixel.style.backgroundColor="black"
    }
}

document.getElementById("gridSize").addEventListener("change",(e) => makeGrid(e.target.value));
document.getElementById("reset").addEventListener("click",clearGrid);
