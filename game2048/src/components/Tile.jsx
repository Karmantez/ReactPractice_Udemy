import React from 'react';
import cn from 'classnames';

export default function Tile({ id, x, y, value, isNew, isMerged }) {
  return (
    <div
      key={id}
      className={cn(`tile tile-${value} tile-position-${x}-${y}`, {
        'tile-merged': isMerged,
        'tile-new': isNew,
      })}
    >
      <div className="tile-inner">{value}</div>
    </div>
  );
}
