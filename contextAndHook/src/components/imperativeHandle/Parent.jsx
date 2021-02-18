import { useRef } from 'react';
import Child from './Child';

export default function Parent() {
  const profileRef = useRef();

  const onClick = () => {
    if (profileRef.current) {
      console.log('current name length: ', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };

  return (
    <div>
      <Child ref={profileRef} />
      <button type="button" onClick={onClick}>
        add age 5
      </button>
    </div>
  );
}
