import { useMemo, useState } from 'react';

function runExpensiveJob(v1, v2) {
  console.log('runExpensiveJob is called');
  // run something too expensive
  return v1 + v2;
}

/**
 * ✅ useMemo
 *    memoization을 통해 저장해 두고,
 *  DependencyList에 저장된 값이 변하지 않는 이상 다시 rendering 하지 않는다.
 */
export default function UseMemo() {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);

  return (
    <>
      <p>{`value is ${value}`}</p>
      <button
        type="button"
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1/v2 수정
      </button>

      <p>{`v3 is ${v3}`}</p>
      <button type="button" onClick={() => setV3(Math.random())}>
        v3 수정
      </button>
    </>
  );
}
