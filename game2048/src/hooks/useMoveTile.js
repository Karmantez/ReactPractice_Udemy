import { useEffect } from 'react';
import { addKeyObserver, removeKeyObserver } from '../utils/keyboard';
import { makeTile, moveTile } from '../utils/tile';

export default function useMoveTile({ tileList, setTileList, setScore }) {
  useEffect(() => {
    function moveAndAdd({ x, y }) {
      const newTileList = moveTile({ tileList, x, y });
      const score = newTileList.reduce((acc, tile) => (tile.isMerged ? acc + tile.value : acc), 0);
      const newTile = makeTile(newTileList);

      setScore((v) => v + score);
      newTile.isNew = true;
      newTileList.push(newTile);
      setTileList(newTileList);
    }

    function moveUp() {
      moveAndAdd({ x: 0, y: -1 });
    }
    function moveDown() {
      moveAndAdd({ x: 0, y: 1 });
    }
    function moveRight() {
      moveAndAdd({ x: 1, y: 0 });
    }
    function moveLeft() {
      moveAndAdd({ x: -1, y: 0 });
    }

    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('right', moveRight);
    addKeyObserver('left', moveLeft);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('right', moveRight);
      removeKeyObserver('left', moveLeft);
    };
  }, [tileList, setTileList, setScore]);
}
