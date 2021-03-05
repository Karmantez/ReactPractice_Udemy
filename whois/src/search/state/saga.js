import { all, put, call, takeEvery, takeLeading } from 'redux-saga/effects';
import { ACTIONS, TYPES } from '.';
import { callApi } from '../../common/util/api';
import { makeFetchSaga } from '../../common/util/fetch';

function* fetchAutoComplete({ keyword }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/search',
    params: { keyword },
  });

  if (isSuccess && data) {
    yield put(ACTIONS.setValue('autoCompletes', data));
  }
}

function* fetchAllHistory() {
  const { isSuccess, data } = yield call(callApi, {
    url: '/history',
  });

  if (isSuccess && data) {
    yield put(ACTIONS.setValue('history', data));
  }
}

export default function* saga() {
  yield all([
    takeEvery(
      TYPES.FETCH_AUTOCOMPLETE,
      makeFetchSaga({ fetchSaga: fetchAutoComplete, canCache: true }),
    ),
    takeLeading(
      TYPES.FETCH_ALL_HISTORY,
      makeFetchSaga({ fetchSaga: fetchAllHistory, canCache: false }),
    ),
  ]);
}
