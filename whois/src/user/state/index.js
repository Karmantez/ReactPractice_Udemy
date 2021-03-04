import { createReducer, createSetValueAction, setValueReducer } from '../../common/redux-helper';

export const TYPES = {
  SET_VALUE: 'user/SET_VALUE',
  FETCH_USER: 'user/FETCH_USER',
};

export const ACTIONS = {
  setValue: createSetValueAction(TYPES.SET_VALUE),
  fetchUser: name => ({ type: TYPES.FETCH_USER, name }),
};

const INITIAL_STATE = {
  user: undefined,
};

const reducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_VALUE]: setValueReducer,
});

export default reducer;
