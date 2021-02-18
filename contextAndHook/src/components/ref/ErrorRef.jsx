import React, { useRef, useState } from 'react';

export default function ErrorRef() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button type="button" onClick={() => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>
      {/* 
        current가 null인지 아닌지 검사 필수!
      */}
      <button type="button" onClick={() => inputRef.current && inputRef.current.focus()}>
        텍스트로 이동
      </button>
    </div>
  );
}
