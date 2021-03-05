import {
  createReducer,
  createSetValueAction,
  setValueReducer,
  FETCH_KEY,
} from '../../common/redux-helper';

export const TYPES = {
  SET_VALUE: 'user/SET_VALUE',
  FETCH_USER: 'user/FETCH_USER',
  FETCH_UPDATE_USER: 'user/FETCH_UPDATE_USER',
  FETCH_USER_HISTORY: 'user/FETCH_USER_HISTORY',
  ADD_HISTORY: 'user/ADD_HISTORY',
};

export const ACTIONS = {
  setValue: createSetValueAction(TYPES.SET_VALUE),
  fetchUser: name => ({ type: TYPES.FETCH_USER, name }),
  fetchUpdateUser: ({ user, key, value, fetchKey }) => ({
    type: TYPES.FETCH_UPDATE_USER,
    user,
    key,
    value,
    [FETCH_KEY]: fetchKey,
  }),
  fetchUserHistory: name => ({ type: TYPES.FETCH_USER_HISTORY, name }),
  addHistory: history => ({ type: TYPES.ADD_HISTORY, history }),
};

const INITIAL_STATE = {
  user: undefined,
  userHistory: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_VALUE]: setValueReducer,
  [TYPES.ADD_HISTORY]: (state, action) =>
    (state.userHistory = [action.history, ...state.userHistory]),
});

export default reducer;
