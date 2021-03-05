import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS, TYPES } from '.';
import { callApi } from '../../common/util/api';
import { makeFetchSaga } from '../../common/util/fetch';

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

export default function* saga() {
  yield all([
    takeEvery(TYPES.FETCH_USER, makeFetchSaga({ fetchSaga: fetchUser, canCache: false })),
  ]);
}
