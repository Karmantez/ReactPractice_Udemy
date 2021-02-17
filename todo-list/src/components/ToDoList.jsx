import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// css
import './css/ToDoList.css';

// component
import ToDo from './ToDo';

export default function ToDoList({ id }) {
  const [todos, setTodos] = useState([]);
  const loginId = id;

  /**
   * 해당 함수가 redering된 후에 실행된다.
   * useEffect는 addEventListener와 같이 후속처리를 할 때 사용된다.
   */
  useEffect(() => {
    console.log('ToDoList Mounted');
    const { localStorage } = window;
    const list = localStorage.getItem(`${id}-list`);

    setTodos(list === null ? [] : JSON.parse(list));

    /**
     * return () => {...} 여기에 작성된 코드들이
     * unmounted 되면서 실행된다.
     */
    return () => console.log('ToDoList Unmounted');
  }, [localStorage]);

  return (
    <div>
      <h1>To-Do List</h1>

      <div id="todo-header">
        <div>날짜</div>
        <div>내용</div>
        <div>action</div>
      </div>

      <div>
        {/* 
          react에서도 vue처럼 컴포넌트를 redering 할 때
          key는 필수적이다. (고유한 id 값을 가지게 함으로써 빠르게 찾을 수 있다)
        */}
        {todos.map((todo) => {
          return <ToDo date={todo.date} content={todo.content} key={todo.id} />;
        })}
      </div>
    </div>
  );
}

ToDoList.propTypes = {
  id: PropTypes.string,
};

ToDoList.defaultProps = {
  id: '아이유',
};
