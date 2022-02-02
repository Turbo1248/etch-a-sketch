const gridContainer = document.querySelector('#grid-container');

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--gridRows', rows);
    gridContainer.style.setProperty('--gridCols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let newCell = document.createElement("div");
        // newCell.textContent = (i + 1);
        newCell.classList.add("cells");
        gridContainer.appendChild(newCell);
        newCell.addEventListener('mouseover', function() {
            newCell.style.backgroundColor = generateRandomRGBA();
        })
    }
};

makeGrid(16, 16);

button = document.getElementById("button");
button.addEventListener("click", clearGrid);
button.addEventListener("click", setGrid);

function clearGrid() {
    let temp = gridContainer.childElementCount;
    for (let i = 0; i < temp; i++) {
        gridContainer.removeChild(gridContainer.childNodes[0]);
    }
}

function setGrid() {
    let temp = prompt("Enter number of squares per side", 16);
    while (temp > 100) {
        temp = prompt("Please enter a value less than 100");
    }
    makeGrid(temp, temp);
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateRandomRGBA() {
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);
    const a = Math.random();
    
    return randomColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }