import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList';

export default function TimelineMain() {
  const [currentText, setCurrentText] = useState('');

  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  const error = useSelector((state) => state.timeline.error);
  const text = useSelector((state) => state.timeline.text);

  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(actions.addTimeline(timeline));
  }

  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }

  function onChangeText(e) {
    const t = e.target.value;
    dispatch(actions.trySetText(t));
    setCurrentText(t);
  }
  console.log('TimelineMain render');

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송중...</p>}
      {!!error && <p>에러 발생: {error}</p>}
      <input type="text" value={currentText} onChange={onChangeText} />
      {!!text && <p>{text}</p>}
    </div>
  );
}
