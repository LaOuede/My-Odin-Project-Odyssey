// Global Variables
let size = 0;
let color = 'purple';


// MouseOver Color handling
const container = document.querySelector('.container');

container.addEventListener('mouseover', (event) => {
    if (event.target.className === 'square') {
        event.target.style.backgroundColor = color;
    }
});


// Canva drawing
function drawCanva(size) {
    const container = document.querySelector('.container');
    
    for (let heigh = 0; heigh < size; heigh++) {

        const row = document.createElement('div')
        row.classList.add('row');
        container.appendChild(row);
        for (let width = 0; width < size; width++) {
            
            const square = document.createElement('div');
            square.classList.add('square');
            const squareSize = 960 / size;

            square.style.width = squareSize + 'px';
            row.appendChild(square);
        }
    }

}


// Get Size
const header = document.querySelector('header');
let sizeBtn = document.createElement('button');
sizeBtn.textContent = 'Choose canva size';
header.appendChild(sizeBtn);

sizeBtn.addEventListener('click', () => {
    size = prompt("what size of canvas do you want?");
    container.innerHTML = '';
    drawCanva(size);
})


// Clear the board
let clearBtn = document.createElement('button');
clearBtn.textContent = 'Reset canva';
header.appendChild(clearBtn);

clearBtn.addEventListener('click', () => {
    container.innerHTML = '';
    drawCanva(size);
});


// Color modification
const colors = document.createElement('div');
colors.classList.add('colors');
header.appendChild(colors);

const colorOptions = ['Red', 'Blue', 'Yellow', 'Purple', 'White'];
colorOptions.forEach(item => {
    let colorBtn = document.createElement('button');
    colorBtn.style.backgroundColor = item;
    colors.appendChild(colorBtn);
});

colors.addEventListener('click', (event) => {
    color = event.target.style.backgroundColor;
});