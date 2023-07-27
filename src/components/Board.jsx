import React, { useState, useEffect } from 'react';
import Tile from './Tile';

/* Board Containing the tiles 
--- Takes in size of each tile and 
--- the picture for the puzzle*/

const Board = ({ size, pictureUrl }) => {
  const [tileOrder, setTileOrder] = useState([...Array(16).keys()]); //----------------- creating an array with 16 elements, each equal to its index. 

  useEffect(() => {
    let newTileOrder = [...tileOrder];

    // Shuffle the newTileOrder array.
    for (let i = newTileOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTileOrder[i], newTileOrder[j]] = [newTileOrder[j], newTileOrder[i]];
    }

    setTileOrder(newTileOrder);
  }, []);

  const handleClick = (id) => {
    const position = tileOrder.indexOf(id);
    const emptyPosition = tileOrder.indexOf(15);

    if (
      (position === emptyPosition - 1 && position % 4 !== 3) ||
      position === emptyPosition + 1 ||
      position === emptyPosition - 4 ||
      position === emptyPosition + 4
    ) {
      const newTileOrder = [...tileOrder];
      [newTileOrder[position], newTileOrder[emptyPosition]] = [newTileOrder[emptyPosition], newTileOrder[position]];
      setTileOrder(newTileOrder);
    }
  };

  const tiles = [];

  for (let i = 0; i < tileOrder.length; i++) {
    tiles.push(
      <Tile
        key={i}
        id={tileOrder[i]}
        position={i}
        size={size}
        pictureUrl={pictureUrl}
        onClick={handleClick}
      />
    );
  }

  return (
    <div className="board" style={{ position: 'relative', width: size * 4, height: size * 4 }}>
      {tiles}
    </div>
  );
};

export default Board;
