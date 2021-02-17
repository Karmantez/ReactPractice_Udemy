import React from 'react';
import PropTypes from 'prop-types';

// css
import './css/ToDo.css';

export default function ToDo({ date, content }) {
  return (
    <div className="todo-container">
      <div>{date}</div>
      <div>{content}</div>
      <div>
        <button type="button">삭제</button>
      </div>
    </div>
  );
}

ToDo.propTypes = {
  date: PropTypes.string,
  content: PropTypes.string,
};

ToDo.defaultProps = {
  date: '없음',
  content: '없음',
};
