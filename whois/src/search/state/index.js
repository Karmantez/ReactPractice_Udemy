import { createReducer, createSetValueAction, setValueReducer } from '../../common/redux-helper';

export const TYPES = {
  SET_VALUE: 'search/SET_VALUE',
  FETCH_AUTOCOMPLETE: 'search/FETCH_AUTOCOMPLETE',
  FETCH_ALL_HISTORY: 'search/FETCH_ALL_HISTORY',
};

export const ACTIONS = {
  setValue: createSetValueAction(TYPES.SET_VALUE),
  fetchAutoComplete: keyword => ({
    type: TYPES.FETCH_AUTOCOMPLETE,
    keyword,
  }),
  fetchAllHistory: () => ({ type: TYPES.FETCH_ALL_HISTORY }),
};

const INITIAL_STATE = {
  keyword: '',
  autoCompletes: [],
  history: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_VALUE]: setValueReducer,
});

export default reducer;
