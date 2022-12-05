let container = document.createElement('div')
let btn = document.createElement('input')
document.body.appendChild(btn)
document.body.appendChild(container)
container.classList.add('container')
btn.setAttribute('type','button')
btn.setAttribute('value','Click Me!') 
btn.classList.add('btn')

function createRow(num) {
    if(num > 100) {
        alert('Grid size should be less than 100!')
    } else if(num <= 0) {
        alert('Grid size should be more than zero!')
    } else {
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
        container.style.gridTemplateColumns = 'auto '.repeat(num)
    }
}

btn.addEventListener('click', ()=> {
    let num = Number(prompt('Input grid size : '))
    createRow(num);
})

