import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * ✅ useLayoutEffect
 *    useEffect와 유사하나 useEffect는 비동기로 동작하는 반면,
 *  useLayoutEffect는 동기로 동작한다. 그래서 많은 연산을 하게 될 경우 브라우저가 먹통이 될 수 있다.
 *
 *  💡 그럼 언제 사용할까?
 *    1. 렌더링 직후에 돔 요소의 값을 읽어들이는 경우
 *    2. 조건에 따라서 컴포넌트를 다시 렌더링 하고 싶은 경우
 */
export default function UseLayoutEffect() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();

  /**
   * ❗ useEffect로 했을 경우 '500 이상' 버튼을 클릭했을 때,
   * div가 깜빡거리는 현상을 볼 수 있다.
   *
   * 💡 '500 이상' 버튼을 클릭했을 때 500보다 큰 값으로 div가 렌더링 된다.
   *  그런데 이 때 useEffect의 DependencyList에 있던 'width'가 변경감지를 하게 되고,
   *  useEffect(...)에서 if 문안의 'setWidth(500)'이 호출된다.
   *  그 결과 다시 500으로 렌더링 되면서 깜빡거리는 현상이 일어난다.
   */
  // useEffect(() => {
  //   if (width > 500) {
  //     setWidth(500);
  //   }
  // }, [width]);

  /**
   * 위의 현상은 useLayoutEffect를 사용하면 해결된다.
   *
   * 📌 React가 데이터 변경을 감지하고 DOM에 실제로 반영했지만,
   * 브라우저가 화면을 그리기전에 useLayoutEffect가 실행이 된다.
   * 동기로 실행이 되면서 React는 다시 500으로 렌더링 한다.
   */
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }

    /**
     * 아래와 같이 연산량이 많은 코드가 있을 경우
     * 렌더링 속도가 늦어진다.
     * (useEffect 함수는 비동기이기 때문에 바로 반영이 된다)
     */
    let v = 0;
    for (let i = 0; i < 1000000000; i += 1) v += i * 2 + i;
    console.log(v);
  }, [width]);

  return (
    <div>
      <div ref={boxRef} style={{ width, height: 100, backgroundColor: 'green' }}>
        text
      </div>
      <button
        type="button"
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        type="button"
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}
