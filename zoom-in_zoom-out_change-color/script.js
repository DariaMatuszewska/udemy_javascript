// powiekszanie na button sizeUp
// pomniejszanie na button sizeDown
// zmiana koloru color

const btnSizeUp = document.querySelector('.sizeUp')
const btnSizeDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const text = document.querySelector('p')

let currentSize = 36


const sizeUp = () => {
    if(currentSize<=56){
    currentSize += 2
    text.style.fontSize = currentSize + 'px'
    }
}

const sizeDown = () => {
    if(currentSize>=16){
    currentSize -= 2
    text.style.fontSize = currentSize + 'px'
    }
}

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 70%)`;
}

const color = () => {
    text.style.color = randomColor()
}


btnColor.addEventListener('click', color)
btnSizeUp.addEventListener('click', sizeUp)
btnSizeDown.addEventListener('click', sizeDown)