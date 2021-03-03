import { all, call, debounce, put, takeLeading } from 'redux-saga/effects';
import { actions, types } from './index';
import callApiLike from '../../common/api';

export function* fetchData(action) {
  /**
   * put: redux action을 발생시키는 메소드
   */
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield put(actions.setValue('error', ''));

  try {
    yield call(callApiLike);
  } catch (error) {
    yield put(actions.setValue('error', error));
    yield put(actions.addLike(action.timeline.id, -1));
  }
  yield put(actions.setLoading(false));
}

export function* trySetText(action) {
  yield put(actions.setValue('text', action.text));
}

export default function* () {
  yield all([
    takeLeading(types.REQUEST_LIKE, fetchData),
    debounce(500, types.TRY_SET_TEXT, trySetText),
  ]);
}
