/**
 * reselect를 사용하면 좋은 점
 *  데이터 가공하는 코드를 따로 뺄 수 있다.
 */
import { createSelector } from 'reselect';

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

/**
 * createSelector는 자체적으로 메모이제이션을 사용한다.
 * [getFriends, getAgeLimit] 함수들은 매개변수의 두 값(friends, ageLimit)이 변경됐을 때만 실행
 */
export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log('getFriendsWithAgeLimit called');
    return friends.filter((item) => item.age <= ageLimit);
  },
);
export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => {
    console.log('getFriendsWithAgeShowLimit called');
    return friendsWithAgeLimit.slice(0, showLimit);
  },
);
