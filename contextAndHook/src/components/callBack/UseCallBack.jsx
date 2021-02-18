import { memo, useCallback, useState } from 'react';

/**
 *  ❗ memo 함수를 사용했음에도 불필요하게 rendering 되고 있다.
 */
const UserEdit = memo(function ({ onSave, setName, setAge }) {
  console.log('UserEdit render');
  return null;
});

function saveToServer(name, age) {}

/**
 *
 * ✅ useCallBack
 *  useMemo Hook과 비슷하게 memoization을 해서 함수를 재활용한다.
 *
 */
export default function UseCallBack() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);

  /**
   * 💡 useCallback Hook을 사용하게 되면,
   * name, age가 변하지 않는 이상 함수를 계속 재활용하게 된다.
   * (즉, 불필요한 연산이 없어짐)
   */
  const onSave = useCallback(() => saveToServer(name, age), [name, age]);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit
        /**
         * 💡 아래와 같이 내부적으로 함수를 생성해서 props로 넘기게 되면,
         * UseCallBack 컴포넌트가 rendering 될 때마다 새로운 함수가 생성되어서 입력이 된다.
         *
         * 📌 그렇게 되면 onSave의 속성값이 항상 변하게 되는데,
         * 자식 컴포넌트인 UserEdit 컴포넌트 입장에서는 사실상 변하는게 없지만
         * 새로운 함수를 받았기 때문에 rendering을 다시 해야하는 불필요한 연산이 발생하게 된다.
         */
        // onSave={() => saveToServer(name, age)}
        onSave={onSave}
        setName={setName}
        setAge={setAge}
      />
      <p>{`v1: ${v1}`}</p>
      <button type="button" onClick={() => setV1(Math.random())}>
        v1 수정
      </button>
    </div>
  );
}
