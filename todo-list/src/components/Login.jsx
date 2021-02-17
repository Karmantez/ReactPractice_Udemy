import React, { useState } from 'react';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const { localStorage } = window;

    if (localStorage.getItem(id) === null) {
      alert('존재하지 않는 아이디입니다.');
      return;
    }
    if (localStorage.getItem(id) !== password) {
      alert('존재하지 않는 아이디입니다.');
      return;
    }
    alert(`${id}님 로그인을 환영합니다.`);
  };

  return (
    <div>
      <div>
        아이디: <input onChange={(event) => setId(event.target.value)} />
      </div>
      <div>
        패스워드: <input type="password" onChange={(event) => setPassword(event.target.value)} />
      </div>

      <div>
        <button type="button" onClick={login}>
          로그인
        </button>
      </div>
    </div>
  );
}
