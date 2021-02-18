import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AboveGame from './components/AboveGame';
import Game from './components/Game';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useLocalStorage('bestScore', 0);

  useEffect(() => {
    if (score > bestscore) {
      setBestScore(score);
    }
  });

  return (
    <div className="container">
      <Header score={score} bestScore={bestscore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}
