import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext({});
const DispatchContext = createContext(() => {});

const INITIAL_STATE = {
  user: { name: 'taylor' },
  product: { name: 'galaxy' },
};

function reducer(state, action) {
  switch (action.type) {
    case 'setUserName':
      return {
        ...state,
        user: { ...state.user, name: action.name },
      };
    default:
      return null;
  }
}

export default function ReducerBasic() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <AppContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <User />
          <Product />
        </DispatchContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

function User() {
  console.log('User Rendering');

  const { user } = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <p>{`${user.name}님 안녕하세요`}</p>
      <button type="button" onClick={() => dispatch({ type: 'setUserName', name: 'brian' })}>
        사용자 이름 수정
      </button>
    </div>
  );
}

function Product() {
  console.log('Product Rendering');
  const { product } = useContext(AppContext);
  return <p>{`제품 이름: ${product.name}`}</p>;
}
