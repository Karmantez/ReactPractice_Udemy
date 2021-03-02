import { shallowEqual, useSelector } from 'react-redux';

function useMySelector(selector) {
  return useSelector(selector, shallowEqual);
}

function MyComponent() {
  const [value1, value2] = useMySelector((state) => [state.value1, state.value2]);
}
