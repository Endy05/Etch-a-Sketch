const gridContainer = document.getElementById('grid-container');
const getGrid = document.querySelector('.getGrid');
const inputGrid = document.querySelector(".inputGrid");
const submit = document.querySelector(".submit");
const close = document.querySelector(".close");
const modal = document.getElementById("popup");

getGrid.addEventListener('click', () => {
    modal.style.display = 'flex';
});

close.addEventListener("click", () => {
    modal.style.display = 'none';
});

submit.addEventListener('click', () => {
    let rcs = inputGrid.value;
    console.log(rcs);

    if (rcs < 6 || rcs > 49) {
        createGrid(10); 
    } else {
        createGrid(rcs);
        modal.style.display = 'none';
    }
});

function createGrid(rowsAndCols) {
    gridContainer.innerHTML = ''; 
    gridContainer.style.gridTemplateColumns = `repeat(${rowsAndCols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rowsAndCols}, 1fr)`;

    for (let i = 0; i < rowsAndCols * rowsAndCols; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.opacity = 1; 

        let interactionCount = 0;  

        gridItem.addEventListener('mouseover', () => {
            if (interactionCount < 10) {
                gridItem.style.backgroundColor = randomColor(); 
                interactionCount++;
                let opacityValue = 1 - (interactionCount * 0.1); 

                
                if (opacityValue >= 0) {
                    gridItem.style.opacity = opacityValue;
                }
            }
        });

        gridContainer.appendChild(gridItem);
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);
