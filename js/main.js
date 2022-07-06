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
    
}
function clearGrid (){

}
function deleteGrid (){
    let grid = document.querySelectorAll(".pixel");
    grid.forEach(pixel => {
        pixel.remove();
    });
}

document.getElementById("gridSize").addEventListener("change",(e) => makeGrid(e.target.value));