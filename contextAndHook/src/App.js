import Context from './components/Context';
import ErrorRef from './components/ref/ErrorRef';
import MultiContext from './components/MultiContext';
import MultiRef from './components/ref/MultiRef';
import Optimization from './components/Optimization';
import Ref from './components/ref/BasicRef';
import BasicUseCallBack from './components/callBack/BasicUseCallBack';
import UseRef from './components/ref/UseRef';
import UseMemo from './components/memo/UseMemo';
import UseCallBack from './components/callBack/UseCallBack';
import UseReducer from './components/reducer/UseReducer';
import Parent from './components/imperativeHandle/Parent';
import UseLayoutEffect from './components/layoutEffect/UseLayoutEffect';
import UseEffect from './components/effect/UseEffect';
import Key from './components/important/Key';

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: '100px' }}>
        <h1>Context API</h1>
        <MultiContext />
        <Context />
        <Optimization />
      </div>
      <div style={{ marginTop: '100px' }}>
        <h1>useRef</h1>
        <Ref />
        <MultiRef />
        <UseRef />
        <ErrorRef />
      </div>
      <div style={{ marginTop: '100px' }}>
        <h1>UseCallBack</h1>
        <UseCallBack />
        <BasicUseCallBack />
      </div>
      <div style={{ marginTop: '100px' }}>
        <h1>useMemo</h1>
        <UseMemo />
      </div>
      <div style={{ marginTop: '100px' }}>
        <h1>useReducer</h1>
        <UseReducer />
      </div>
      <div style={{ marginTop: '100px' }}>
        <h1>UseImperativeHandler</h1>
        <Parent />
      </div>
      <div style={{ marginTop: '100px' }}>
        <h1>UseLayoutEffect</h1>
        <UseLayoutEffect />
      </div>

      <div style={{ marginTop: '150px' }}>
        <h1>UseEffect</h1>
        <UseEffect />
      </div>

      <div style={{ marginTop: '150px' }}>
        <h1>Key의 중요성</h1>
        {/* <Key /> */}
      </div>
    </div>
  );
}

export default App;
