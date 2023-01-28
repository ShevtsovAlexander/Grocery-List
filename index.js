const eraser = document.querySelector('#eraser')
const groceryItems = document.querySelector('#groceryItems')
const userInput = document.querySelector('#userInput')

eraser.addEventListener('click', () => {
    groceryItems.textContent = " "
})
userInput.addEventListener('keydown', (e) => {
    if(e.key == "Enter") {
        addItem()
    }
})

addItem = () => {
    const item = document.createElement('h2')
    item.textContent = '- ' + userInput.value;

    item.addEventListener('click', () => {
        if(item.style.textDecoration != 'line-through') {
            item.style.textDecoration = 'line-through'
        } else {
            item.style.textDecoration = "none";
        }

    })
    
    groceryItems.append(item);
    userInput.value = ""
}