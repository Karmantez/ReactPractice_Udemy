import React, { useEffect, useRef } from 'react';

/**
 * 💡 ref
 *  DOM 요소에 직접 접근해야할 경우 사용된다.
 */
export default function Ref() {
  const inputRef = useRef();

  useEffect(() => {
    /**
     * Rendering 결과가 DOM에 반영된 후에 접근할 수 있기 때문에
     * useEffect에서 사용해야 한다.
     */
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      {/*
        하위 컴포넌트가 Class형이면 instance를 가리키게 되고,
        해당 Class의 Method를 호출할 수 있다.

        ex>
          <Box ref={inputRef} />

        📌 반면 함수형 컴포넌트는 instance가 만들어지지 않지만,
        'useImperativeHandle'이라는 Hook을 사용하게 되면 동일한 효과를 볼 수 있다.
       */}
      <button type="button">저장</button>
    </div>
  );
}
