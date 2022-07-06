function makeGrid(size=16) {
    for(let w=0; w<size; w++){
        for(let h=0; h<size; h++){
            document.createElement("div");
        }
    }
    
}
function clearGrid (){

}
function deleteGrid (){

}

document.getElementById("gridSize").addEventListener("change", e =>{console.log(e.target.value)});