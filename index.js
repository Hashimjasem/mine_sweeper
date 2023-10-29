function createTiles() {
    // Create an empty array to store the tiles
    const tiles = [];
  
    // Create a for loop to run 100 times
    for (let i = 0; i < 100; i++) {
      // Create a new tile
      const tile = document.createElement("div");
      tile.classList.add("tile");
  
      // Add the tile to the grid div
      const grid = document.querySelector(".grid");
      grid.appendChild(tile);
  
      // Add the tile to the tiles array
      tiles.push(tile);
    }
  
    // Return the array of tiles
    console.log(tiles)
    tiles.forEach((tile) => {
        tile.addEventListener("click", () => {
          // Do something when the tile is clicked
          tile.classList.add("red");
        });
      });
      
    return tiles;
    
  }
  // Run the function on page load
  window.addEventListener("load", createTiles);