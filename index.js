let grid = document.querySelector(".grid")

var createGrid = () => {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        grid.appendChild(div)
    }
}

function startGame () {

}

document.addEventListener("DOMContentLoaded", function () {



    createBoard()
    startGame()
})