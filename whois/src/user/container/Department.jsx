import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../state';

export default function Department() {
  const [isEditDepartment, setIsEditDepartment] = useState(false);
  const [tempDepartment, setTempDepartment] = useState('');
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  function onSaveDepartment() {
    if (tempDepartment) {
      dispatch(
        ACTIONS.fetchUpdateUser({
          user,
          key: 'department',
          value: tempDepartment,
          fetchKey: 'department',
        }),
      );
      setIsEditDepartment(false);
    } else {
      console.log('else');
    }
  }

  function onEditDepartment() {
    setIsEditDepartment(true);
    setTempDepartment(user.department);
  }
  return (
    <>
      {isEditDepartment && (
        <Input
          autoFocus
          //   ref={ref => ref && ref.focus()}
          value={tempDepartment}
          onChange={e => setTempDepartment(e.target.value)}
          onPressEnter={onSaveDepartment}
          onBlur={() => setIsEditDepartment(false)}
          style={{ width: '100%' }}
        />
      )}
      {!isEditDepartment && (
        <Button
          type="text"
          block
          onClick={onEditDepartment}
          style={{ textAlign: 'left', padding: 0 }}
        >
          {user.department}
        </Button>
      )}
    </>
  );
}
