import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const Board = ({ size, pictureUrl }) => {
  const [tileOrder, setTileOrder] = useState([...Array(16).keys()]);

  useEffect(() => {
    let newTileOrder = [...tileOrder];

    // Shuffle the newTileOrder array.
    for (let i = newTileOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTileOrder[i], newTileOrder[j]] = [newTileOrder[j], newTileOrder[i]];
    }

    setTileOrder(newTileOrder);
  }, []);

  const tiles = [];

  for (let i = 0; i < tileOrder.length; i++) {
    tiles.push(
      <Tile
        key={i}
        id={tileOrder[i]}
        size={size}
        pictureUrl={pictureUrl}
      />
    );
  }

  return (
    <div className="board">
      {tiles}
    </div>
  );
};

export default Board;
