createTiles();

function createTiles() {
  const tiles = [];

  //creates tiles and pushes them into tiles array
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    const grid = document.querySelector(".grid");
    grid.appendChild(tile);

    tiles.push(tile);

  }

  tiles.forEach((tile) => {
    int = Math.random(0, 1)
    if (int >= 0.90) {
      tile.classList.add("red");
    }
  });

  tiles.forEach((tile, index) => {




    tile.addEventListener("click", () => {
      const surroundingTiles = [
        //above
        index - 11,
        index - 10,
        index - 9,
  
        //either side
        index - 1,
        index + 1,
  
        //below
        index + 9,
        index + 10,
        index + 11,
      ];

      console.log("Clicked tile index:", index);
      console.log("surrounding tiles:", surroundingTiles)

      if (tile.classList.contains('red')) {
        console.log('mine')
      }
    });
  });

  return tiles;
}

