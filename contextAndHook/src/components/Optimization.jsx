import React, { createContext, memo, useContext, useState } from 'react';

const UserContext = createContext({ username: 'unknwon', age: 0 });

export default function Optimization() {
  // const [username, setUsername] = useState('mike');
  /**
   * 💡 해결방법은 하나의 객체로 관리하는 것
   */
  const [user, setUser] = useState({ username: 'mike', age: 0 });
  // const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);

  console.log('Optimization Component Rendering');

  return (
    <div>
      {/* 
        Optimization 컴포넌트가 만들어지면,
        Provider의 value도 다시 만들어진다.
      */}
      {/* <UserContext.Provider value={{ username, age }}> */}
      <UserContext.Provider value={user}>
        <Profile />

        {/* 
          증가버튼을 누르게 되면 count와 관련없는 Greeting 컴포넌트도
          rendering이 되버리는 문제가 발생한다.
        */}
        <button type="button" onClick={() => setCount(count + 1)}>
          증가
        </button>
      </UserContext.Provider>
    </div>
  );
}

const Profile = memo(function () {
  console.log('Profile Component Rendering');
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  /**
   * Greeting은 Optimization의 count값과 관련이 없지만
   * 상태감지로 인해 Optimiaztion이 rendering되면 UserContext의 value도
   * 새로 만들어지기 때문에 Greeting도 다시 rendering을 하게 된다.
   */
  const { username, age } = useContext(UserContext);

  console.log('Greeting Component Rendering');
  return <p>{`${username}님 안녕하세요.`}</p>;
}
