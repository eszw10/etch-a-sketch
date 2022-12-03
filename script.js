let container = document.createElement('div')
let grid = document.createElement('div')
grid.classList.add('bord')
document.body.appendChild(container)
container.classList.add('container')

function createRow(num) {
    for(let i = 0;i < num;i++) { 
        for(let j = 0;j < num;j++) {
            let row = document.createElement('div')
            row.style.height = `${960/num}px`
            row.style.width = `${960/num}px`
            container.appendChild(row)
            row.classList.add('bord')
            row.addEventListener('mouseover',()=> {
                row.style.backgroundColor = 'black'
            })
        }     
    }
    
}

createRow(10);
