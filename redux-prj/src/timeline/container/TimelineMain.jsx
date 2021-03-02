import React, { useEffect, useReducer, useState } from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList';

export default function TimelineMain() {
  const [, forceUpdate] = useReducer((v) => {
    console.log(v);
    return v + 1;
  }, 0);
  // const [, forceUpdate] = useState((v) => v + 1, 0);

  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const { timelines } = store.getState().timeline;
      if (prevTimelines !== timelines) {
        console.log('?');
        forceUpdate();
        prevTimelines = timelines;
      }
    });
    return () => unsubscribe();
  }, []);

  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }
  console.log('TimelineMain render');
  const { timelines } = store.getState().timeline;
  return (
    <div>
      <button type="button" onClick={onAdd}>
        타임라인 추가
      </button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
