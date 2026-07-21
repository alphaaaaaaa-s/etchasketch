const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize-btn');


function createGrid(size) {
    
    container.innerHTML = '';

    
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        
        square.dataset.interactions = 0;

        
        square.addEventListener('mouseenter', (e) => {
            let interactions = parseInt(e.target.dataset.interactions);
            interactions++;
            e.target.dataset.interactions = interactions;

            if (interactions === 1) {
                
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                
                
                e.target.dataset.r = r;
                e.target.dataset.g = g;
                e.target.dataset.b = b;
                
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
               
                let r = parseInt(e.target.dataset.r);
                let g = parseInt(e.target.dataset.g);
                let b = parseInt(e.target.dataset.b);

                r = Math.floor(r * 0.9);
                g = Math.floor(g * 0.9);
                b = Math.floor(b * 0.9);

                
                e.target.dataset.r = r;
                e.target.dataset.g = g;
                e.target.dataset.b = b;

                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });

        
        container.appendChild(square);
    }
}


resizeBtn.addEventListener('click', () => {
    let userInput = prompt("Enter the number of squares per side (max 100):");
    
    
    if (userInput === null) return;

    let size = parseInt(userInput);

    
    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(size);
    }
});


createGrid(16);