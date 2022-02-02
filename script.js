const gridContainer = document.querySelector('#grid-container');

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--gridRows', rows);
    gridContainer.style.setProperty('--gridCols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let newCell = document.createElement("div");
        // newCell.textContent = (i + 1);
        newCell.classList.add("cells");
        gridContainer.appendChild(newCell);
    }
   
}

makeGrid(16,16);

document.querySelectorAll('.cells').forEach(cell => {
    cell.addEventListener('mouseover', event => {
        cell.style.backgroundColor = "blue";
        console.log("hover");
    })
})

button = document.getElementById("button");
button.addEventListener("click", clearGrid);
button.addEventListener("click",setGrid);

function clearGrid() {
    let temp = gridContainer.childElementCount;
    for (let i = 0; i < temp; i++) {
    gridContainer.removeChild(gridContainer.childNodes[0]);
    }
}

function setGrid() {
    let temp = prompt("Enter number of squares per side")
    makeGrid(temp, temp);

};


