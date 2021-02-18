import React, { forwardRef, useEffect, useRef } from 'react';

/**
 * ✅ fowardRef
 *    하위 컴포넌트의 ref를 사용하기 위한 Hook
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
      <InputAndSave inputRef={inputRef} />
      <Button ref={buttonRef} />
      <button type="button" onClick={() => inputRef.current.focus()}>
        텍스트로 이동
      </button>
    </div>
  );
}

function InputAndSave({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button">저장</button>
    </div>
  );
}

/**
 * 2번째 매개변수에 ref를 넣어서 사용할 수 있다.
 */
const Button = forwardRef(function({onClick}, ref) => {
  return (<button type="button" onClick={onClick} ref={ref}>저장</button>);
});
