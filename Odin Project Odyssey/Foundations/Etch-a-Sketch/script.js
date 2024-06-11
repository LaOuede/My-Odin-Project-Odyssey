let color = 'purple';

// MouseOver Color handling
const container = document.querySelector('.container');

container.addEventListener('mouseover', (event) => {
        const square = event.target;
        console.log(event.target);

        if (event.target.className === 'square') {
            square.style.backgroundColor = color;
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
            console.log(squareSize);

            square.style.width = squareSize + 'px';
            console.log(square.style.width);
            row.appendChild(square);
        }
    }

}

// Get Size
let size = 0;

const header = document.querySelector('header');
let sizeBtn = document.createElement('button');
sizeBtn.textContent = 'Choose canva size';
header.appendChild(sizeBtn);

sizeBtn.addEventListener('click', () => {
    container.innerHTML = '';
    size = prompt("what size of canvas do you want?");
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

let redBtn = document.createElement('button');
redBtn.style.backgroundColor = 'Red';
colors.appendChild(redBtn);

let blueBtn = document.createElement('button');
blueBtn.style.backgroundColor = 'Blue';
colors.appendChild(blueBtn);

let yellowBtn = document.createElement('button');
yellowBtn.style.backgroundColor = 'Yellow';
colors.appendChild(yellowBtn);

let purpleBtn = document.createElement('button');
purpleBtn.style.backgroundColor = 'Purple';
colors.appendChild(purpleBtn);

// const colorBtn = document.querySelector('.color');

colors.addEventListener('click', (event) => {
    console.log('Ici!');
    let choice = event.target;
    console.log(choice);
    color = choice.style.backgroundColor;
});