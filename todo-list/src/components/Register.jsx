import React, { useState } from 'react';

export default function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const register = () => {
    const { localStorage } = window;

    if (localStorage.getItem(id)) {
      alert('존재하는 아이디 입니다.');
      return;
    }
    if (password !== passwordCheck) {
      alert('비밀번호가 맞지 않습니다.');
      return;
    }
    alert(`${id}님 회원가입을 축하드립니다.`);
    localStorage.setItem(id, password);
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
        패스워드 확인:
        <input type="password" onChange={(event) => setPasswordCheck(event.target.value)} />
      </div>

      <div>
        <button type="button" onClick={register}>
          회원가입
        </button>
      </div>
    </div>
  );
}
