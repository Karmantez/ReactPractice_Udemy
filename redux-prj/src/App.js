import React from 'react';
// use react-redux
import { Provider } from 'react-redux';
import store from './common/store';
import FriendMain from './friend/container/FriendMain';
import TimelineMain from './timeline/container/TimelineMain';
// import { addTimeline, removeTimeline, editTimeline, increaseNextPage } from './timeline/state';
// import { addFriend, removeFriend, editFriend } from './friend/state';
// import store from './common/store';

// store.dispatch(addTimeline({ id: 1, desc: '코딩은 즐거워' }));
// store.dispatch(addTimeline({ id: 2, desc: '리덕스 좋아' }));
// store.dispatch(increaseNextPage());
// store.dispatch(editTimeline({ id: 2, desc: '리덕스 너무 좋아' }));
// store.dispatch(removeTimeline({ id: 1, desc: '코딩은 즐거워' }));

// store.dispatch(addFriend({ id: 1, name: '아이유' }));
// store.dispatch(addFriend({ id: 2, name: '신혜선' }));
// store.dispatch(editFriend({ id: 1, name: '서은수' }));
// store.dispatch(removeFriend({ id: 1, name: '서은수' }));

function App() {
  return (
    <div className="App">
      {/* 
        리액트에서 액션이 처리됐을 때
        이벤트를 받아서 하위의 컴포넌트가 렌더링 될 수 있도록 해줌
      */}
      <Provider store={store}>
        Redux 실습
        <FriendMain />
        <TimelineMain />
      </Provider>
    </div>
  );
}

export default App;
