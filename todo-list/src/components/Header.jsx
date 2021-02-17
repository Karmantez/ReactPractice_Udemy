import React from 'react';
import { Link } from 'react-router-dom';

// css
import './css/Header.css';

export default function Header() {
  return (
    <header>
      <Link className="menu" to="/">
        홈
      </Link>
      <Link className="menu" to="/login">
        로그인
      </Link>
      <Link className="menu" to="/register">
        회원가입
      </Link>
      <Link className="menu" to="/todo">
        To-Do
      </Link>
    </header>
  );
}
