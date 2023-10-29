let grid = document.querySelector(".grid")

var createGrid = () => {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        div.classList.add(i)
        grid.appendChild(div)
    }
}
    //1. spawn in random mines

    //2.when u click square
        // if its a 'safe' square 2 things can happen:
        //1. shows a number in the clicked square on how many bombs are adjasent to it
            //how to calculate this number
        //2. uncovers all safe squares connected
            // how to 

    // if its a mine...game over



document.addEventListener("DOMContentLoaded", function () {
    createGrid()
})

//lets create a function to paint all adjacent tiles red when i click on a tile
let paint = () => {
    
}