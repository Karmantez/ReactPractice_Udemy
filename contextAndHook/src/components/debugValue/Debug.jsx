import UseDebugValue, { STATE_START, STATE_RUNNING } from './UseDebugValue';

/**
 * ✅ useDebugValue
 *    React 개발자 도구에서 편리하게 디버깅 할 수 있도록 도와줌
 */
export default function Debug() {
  const [state, next] = UseDebugValue(true);
  const msg =
    state === STATE_START ? '앱 시작' : state === STATE_RUNNING ? '앱 실행 중' : '앱 종료';
  return (
    <div>
      <p>{msg}</p>
      <button onClick={next}>next</button>
    </div>
  );
}
