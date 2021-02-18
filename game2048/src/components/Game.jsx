import React, { useState } from 'react';
import { times } from 'lodash';
import MAX_POS from '../constant';
import { getInitialTileList } from '../utils/tile';
import useMoveTile from '../hooks/useMoveTile';
import Tile from './Tile';

export default function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);

  // up, down, left, right
  useMoveTile({ tileList, setTileList, setScore });

  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, (index) => (
          <div key={index} className="grid-row">
            {times(MAX_POS, (index2) => (
              <div key={index2} className="grid-cell" />
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map((tile) => (
          <Tile key={tile.id} {...tile} />
        ))}
      </div>
    </div>
  );
}
