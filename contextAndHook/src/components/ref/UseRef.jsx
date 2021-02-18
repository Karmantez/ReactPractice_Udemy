import { useEffect, useState, useRef } from 'react';

/**
 * ✅ useRef
 *    useRef는 DOM에 접근하기 위한 Hook으로 주로 쓰이지만
 *  rendering과 관련없는 데이터 처리에 사용될 수 있다.
 *
 * 💡 만약 이전 나이값정보를 useState로 관리했다면,
 * UI는 변화가 없음에도 해당 컴포넌트를 값이 변할 때마다 rendering 했을 것이다.
 * 그러나 해당 값을 useRef로 관리함으로써
 * 데이터는 변하지만 컴포넌트는 rendering하지 않게함으로써 불필요한 연산을 줄일 수 있었다.
 */
export default function UseRef() {
  const [age, setAge] = useState(20);
  /**
   * 이전 age값을 useRef를 사용해서 저장함으로써
   * 컴포넌트가 rendering 되는 것을 막음
   */
  const prevAgeRef = useRef(20);
  let text = 'same';

  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);

  const prevAge = prevAgeRef.current;

  if (age > prevAge) {
    text = 'older';
  } else if (age < prevAge) {
    text = 'younger';
  }

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        type="button"
        onClick={() => {
          const newAge = Math.floor(Math.random() * 50 + 1);
          setAge(newAge);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}
