import React, { useEffect, useRef } from 'react';

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 100 },
  { id: 3, width: 80 },
  { id: 4, width: 100 },
  { id: 5, width: 90 },
  { id: 6, width: 60 },
  { id: 7, width: 120 },
];

export default function MultiRef() {
  const boxListRef = useRef({});

  function onClick() {
    let maxRight = 0;
    let maxId = 0;

    BOX_LIST.forEach((box) => {
      const ref = boxListRef.current[box.id];

      if (ref) {
        const rect = ref.getBoundingClientRect();

        if (maxRight < rect.right) {
          maxRight = rect.right;
          maxId = box.id;
        }
      }
    });
    alert(`오른쪽 끝 요소는 ${maxId}, 길이는 ${maxRight} 입니다.`);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100vw',
        height: '100%',
      }}
    >
      {BOX_LIST.map((box) => (
        <div
          key={box.id}
          ref={(ref) => (boxListRef.current[box.id] = ref)}
          style={{
            flex: '0 0 auto',
            width: box.width,
            height: 100,
            backgroundColor: 'yellow',
            border: 'solid 1px red',
          }}
        >
          {`box_${box.id}`}
        </div>
      ))}
      <button type="button" onClick={onClick}>
        오르쪽 끝 요소는?
      </button>
    </div>
  );
}
