import React, { useEffect, useReducer } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend, setValue } from '../state';
import {
  getAgeLimit,
  getShowLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
} from '../state/selector';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];

export default function FriendMain() {
  /**
   * redux에서 state를 가져올 때는 useSelector를 쓴다.
   */
  // const friends = useSelector((state) => state.friend.friends);
  const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] = useSelector(
    /**
     * useSelect는 action이 발생할 때마다 내부코드를 실행한다.
     * 그리고 반환하는 값(return)을 토대로 컴포넌트를 다시 렌더링할지 말지 결정한다.
     */
    // (state) => {
    //   // eslint-disable-next-line no-shadow
    //   const { ageLimit, showLimit, friends } = state.friend;
    //   const _friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
    //   const _friendsWithAgeShowLimit = _friendsWithAgeLimit.slice(0, showLimit);
    //   return [ageLimit, showLimit, _friendsWithAgeLimit, _friendsWithAgeShowLimit];
    // },
    (state) => [
      getAgeLimit(state),
      getShowLimit(state),
      getFriendsWithAgeLimit(state),
      getFriendsWithAgeShowLimit(state),
    ],
    shallowEqual,
  );

  /**
   * ❗ 여러개의 state를 사용하고 싶을 때
   *      const friends = useSelector((state) => [state.friend.friends1, state.friend.friends2]);
   *
   *    위의 코드처럼 해도 되지만 friends1, friends2가 변경되지 않았음에도 action이 발생하면,
   *   컴포넌트가 렌더링 되는 현상이 발생한다.
   *   이를 해결하기 위해 두 번째 매개변수로 react-redux의 shallowEqual을 사용한다.
   *   (💡 얕은 비교를 통해 값을 비교한다.)
   */

  // 📌 react-redux 없이 사용할 때
  // const [, forceUpdate] = useReducer((v) => v + 1, 0);

  // useEffect(() => {
  //   let prevFriends = store.getState().friend.friends;
  //   const unsubscribe = store.subscribe(() => {
  //     const { friends } = store.getState().friend;
  //     if (prevFriends !== friends) {
  //       forceUpdate();
  //       prevFriends = friends;
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);
  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend();
    // store.dispatch(addFriend(friend));
    dispatch(addFriend(friend));
  }
  console.log('FriendMain render');
  // const { friends } = store.getState().friend;
  return (
    <div>
      <button type="button" onClick={onAdd}>
        친구 추가
      </button>
      {/* <FriendList friends={friends} /> */}
      <NumberSelect
        // onChange={(v) => dispatch(setAgeLimit(v))}
        onChange={(v) => dispatch(setValue('ageLimit', v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        // onChange={(v) => dispatch(setShowLimit(v))}
        onChange={(v) => dispatch(setValue('showLimit', v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}
