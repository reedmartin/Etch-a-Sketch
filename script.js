// create the grid
let container = document.querySelector(".container")

function gridSize(size) {
    container.innerHTML = "";
    let squareSize = 800 / size;  // Calculate size based on grid size

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let gridSquare = document.createElement("div")
            container.appendChild(gridSquare);
            gridSquare.style.height = squareSize + "px";  // Use calculated size
            gridSquare.style.width = squareSize + "px";   // Use calculated size
            gridSquare.dataset.opacity = 0;

            gridSquare.addEventListener('mouseover', (e) => {
                e.target.dataset.opacity = Number(e.target.dataset.opacity) + 0.1;
                e.target.style.backgroundColor = `rgba(0, 0, 0, ${e.target.dataset.opacity})`;
            });
        }
    }
}

gridSize(16);  // Add this to create the initial grid!

// create the input
let inputButton = document.querySelector(".inputButton")
inputButton.addEventListener('click', (c) => {
    let userInput = prompt("How many squares per side do you want in your new grid?:");
    let size = Number(userInput);
    if (size > 100) {
        alert("choose a smaller number");
    }
    else {
        gridSize(size);  // Add this to create the new grid!
    }
   
})


let leftDial = document.querySelector('#left-dial');
let rightDial = document.querySelector('#right-dial');

container.addEventListener('mousemove', (e) => {
    leftDial.style.transform = `rotate(${e.clientY}deg)`;
    rightDial.style.transform = `rotate(${e.clientX}deg)`;
});

let clearButton = document.querySelector(".clearButton")
let etchWrapper = document.querySelector('.etch-wrapper');

clearButton.addEventListener('click', () => {
    etchWrapper.classList.add('shake');
    container.innerHTML = "";
    gridSize(16);  // Recreate the default 16x16 grid

    setTimeout(() => {
        etchWrapper.classList.remove('shake');
    }, 2000);
});