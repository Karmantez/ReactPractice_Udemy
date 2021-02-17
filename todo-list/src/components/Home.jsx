import React from 'react';

export default function Home() {
  const addDummyToIU = () => {
    const { localStorage } = window;
    const list = [
      {
        id: 'todo-0',
        date: '2021-02-18',
        content: '밥먹기',
      },
      {
        id: 'todo-1',
        date: '2021-02-18',
        content: '양치하기',
      },
      {
        id: 'todo-2',
        date: '2021-02-18',
        content: '샤워하기',
      },
    ];
    localStorage.setItem('아이유-list', JSON.stringify(list));

    alert('Dummy Data 입력성공!');
  };

  return (
    <div>
      <div>React로 만드는 ToDo-List</div>
      <div>
        <button type="button" onClick={addDummyToIU}>
          아이유 아이디에 Dummy Data 넣기
        </button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <img style={{ width: '100%' }} src="chulinwanghoo.gif" alt="main" />
      </div>
    </div>
  );
}
