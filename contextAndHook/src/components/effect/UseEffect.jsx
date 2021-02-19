import { useEffect, useState } from 'react';

const fetchUser = (userId, needDetail) => {
  return userId + needDetail;
};

export default function UseEffect({ userId }) {
  const [user, setUser] = useState();
  const [needDetail, setNeedDetail] = useState(false);

  useEffect(() => {
    fetchUser(userId, needDetail);
  }, [userId]);
  console.log(user, setNeedDetail);
  return null;
}
