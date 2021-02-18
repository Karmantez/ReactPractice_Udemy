import { createContext, useReducer } from 'react';

export const ProfileDispatch = createContext(null);

const INITIAL_STATE = { name: 'empty', age: 0 };
const MAX_AGE = 50;
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      if (action.age > MAX_AGE) return { ...state, age: MAX_AGE };
      return { ...state, age: action.age };
    default:
      return state;
  }
}

/**
 * Context API와 함께사용 하여
 * Tree의 깊은 곳까지 상태관리를 할 수 있다.
 */
export default function WithContextAPI() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
}
