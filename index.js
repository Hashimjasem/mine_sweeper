const tiles = createTiles();

tiles.forEach((tile, index) => {
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
  tile.addEventListener("click", () => {
    console.log("Clicked tile index:", index);
    console.log("surrounding tiles:", surroundingTiles)
  });
});

function createTiles() {
  const tiles = [];

  for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    const grid = document.querySelector(".grid");
    grid.appendChild(tile);

    tiles.push(tile);
  }

  return tiles;
}