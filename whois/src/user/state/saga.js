import { all, call, put, takeLeading } from 'redux-saga/effects';
import { ACTIONS, TYPES } from '.';
import { callApi } from '../../common/util/api';
import { deleteApiCache, makeFetchSaga } from '../../common/util/fetch';

function* fetchUser({ name }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/search',
    params: { keyword: name },
  });

  if (isSuccess && data) {
    const user = data.find(item => item.name === name);
    if (user) {
      yield put(ACTIONS.setValue('user', user));
    }
  }
}

function* fetchUpdateUser({ user, key, value }) {
  const oldValue = user[key];
  yield put(ACTIONS.setValue('user', { ...user, [key]: value }));
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/update',
    method: 'post',
    data: { name: user.name, key, value, oldValue },
  });

  if (isSuccess && data) {
    deleteApiCache();
    yield put(ACTIONS.addHistory(data.history));
  } else {
    yield put(ACTIONS.setValue('user', user));
  }
}

function* fetchUserHistory({ name }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/history',
    params: { name },
  });

  if (isSuccess && data) {
    yield put(ACTIONS.setValue('userHistory', data));
  }
}

export default function* saga() {
  yield all([
    takeLeading(TYPES.FETCH_USER, makeFetchSaga({ fetchSaga: fetchUser, canCache: false })),
    takeLeading(
      TYPES.FETCH_UPDATE_USER,
      makeFetchSaga({ fetchSaga: fetchUpdateUser, canCache: false }),
    ),
    takeLeading(
      TYPES.FETCH_USER_HISTORY,
      makeFetchSaga({ fetchSaga: fetchUserHistory, canCache: false }),
    ),
  ]);
}
