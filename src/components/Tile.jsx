import React from 'react';

const Tile = ({ size, id, pictureUrl,position, onClick }) => {
  return (
    <div
    className={`tile ${id === 15 ? 'tile-empty' : ''}`}
    onClick={() => onClick(id)}
    style={{
      width: size,
      height: size,
      backgroundImage: id === 15 ? null : `url(${pictureUrl})`,
      backgroundSize: `${size * 4}px ${size * 4}px`,
      backgroundPosition: `${-1 * (id % 4) * size}px ${-1 * Math.floor(id / 4) * size}px`,
      transform: `translate(${(position % 4) * size}px, ${Math.floor(position / 4) * size}px)`,
      position: 'absolute',
      transition: 'transform 0.3s'
    }}
  />
  );
};

export default Tile;
