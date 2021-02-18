import React, { createContext, memo, useContext, useState } from 'react';

const UserContext = createContext('unknwon');

export default function Context() {
  const [name, setName] = useState('Rose');

  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </UserContext.Provider>
    </div>
  );
}

const Profile = memo(function () {
  /**
   *  Profile 컴포넌트가 redering 되지 않아도
   *  Context 컴포넌트에서 변경한 값(name)이 Greeting 컴포넌트에 반영된다.
   */
  console.log('Profile Rendering');
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  /**
   * Context Api를 이용하여 사용하는 값(username)은 Consumer 안에서만 사용할 수 있는건 아니다.
   * Hook을 사용하면 해결된다.
   */
  const username = useContext(UserContext);

  return (
    // 💡 Hook을 사용하지 않았을 때
    // <UserContext.Consumer>
    //   {(username) => <p>{`${username}님 안녕하세요.`}</p>}
    // </UserContext.Consumer>

    // 💡 Hook을 사용했을 때
    <div>
      <p>{`${username}님 안녕하세요.`}</p>
    </div>
  );
}
