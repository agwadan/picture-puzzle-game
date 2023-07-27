import React from 'react';

const Tile = ({ size, id, pictureUrl }) => {
  return (
    <div
      className="tile"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${pictureUrl})`,
        backgroundSize: `${size * 4}px ${size * 4}px`,
        backgroundPosition: `${-1 *(id % 4) * size}px ${-1 * Math.floor(id / 4) * size}px`,
      }}
    />
  );
};

export default Tile;
