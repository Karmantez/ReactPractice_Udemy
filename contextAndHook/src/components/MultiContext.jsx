import React, { createContext, useContext } from 'react';

const UserContext = createContext('unknwon');
const ThemeContext = createContext('dark');

export default function MultiContext() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value="Multi Provider">
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);

  return (
    <p style={{ color: theme === 'dark' ? 'gray' : 'green' }}>{`${username}님 안녕하세요.`}</p>
  );
}
