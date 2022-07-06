function makeGrid(size=16) {
    let canvas = document.querySelector("#canvas");
    for(let w=0; w<size; w++){
        for(let h=0; h<size; h++){
            let div = document.createElement("div");
            
            div.style.width = `${100/size}%`
            div.style.height = `${100/size}%`
            div.className = `pixel-w${w}-h${h}`;
            canvas.appendChild(div);
        }
    }
    
}
function clearGrid (){

}
function deleteGrid (){

}

document.getElementById("gridSize").addEventListener("change",(e) => makeGrid(e.target.value));