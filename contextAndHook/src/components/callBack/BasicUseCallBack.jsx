import React, { useCallback, useState } from 'react';

const INITIAL_TEXT = 'Hello World?';

export default function UseCallBack() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  /**
   * useCallback의 memoization으로 함수를 계속 재활용한다.
   */
  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          // ref안의 함수는 해당 요소가 만들어질 때, 없어질 때 호출이 된다.
          // 생성될 때는 해당 요소의 레퍼런스가 입력되고, 없어질 때는 null이 입력된다.
          ref={setInitialText}
          value={text}
          /**
           * onChange에서 input 값을 상태값에 입력할 때마다
           * 새로 rendering되고 위의 ref 함수가 새로 만들어져서 계속 호출되니,
           * input 값 반영이 안된다.
           *
           * 이를 해결하기 위해선 함수를 고정 시켜야한다.
           * 💡 useCallback으로 해결 가능
           */
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button type="button" onClick={() => setShowText(!showText)}>
        보이기/가리기
      </button>
    </div>
  );
}
