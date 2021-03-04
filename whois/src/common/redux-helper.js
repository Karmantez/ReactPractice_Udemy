import produce from 'immer';

export const FETCH_PAGE = Symbol('FETCH_PAGE');
export const FETCH_KEY = Symbol('FETCH_KEY');
export const NOT_IMMUTABLE = Symbol('NOT_IMMUTABLE');

export function createReducer(initialState, handlerMap) {
  return (state = initialState, action) => {
    const handler = handlerMap[action.type];
    if (handler) {
      if (action[NOT_IMMUTABLE]) {
        return handler(state, action);
      }
      return produce(state, draft => {
        handlerMap[action.type](draft, action);
      });
    }
    return state;
  };
}

export function createSetValueAction(type) {
  return (key, value) => ({ type, key, value });
}
export function setValueReducer(state, action) {
  state[action.key] = action.value;
}
