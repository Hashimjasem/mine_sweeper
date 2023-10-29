const tiles = createTiles();

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => {
    console.log("Clicked tile index:", index);
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