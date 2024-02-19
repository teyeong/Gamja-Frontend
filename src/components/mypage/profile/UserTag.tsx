import { UserProps } from 'props-type';
import { useEffect, useState } from 'react';

const UserTag = ({ user }: UserProps) => {
  const [tag, setTag] = useState('');

  useEffect(() => {
    if (user === '시니어 회원') {
      setTag('green-tag');
    } else if (user === '기업 회원') {
      setTag('blue-tag');
    }
  }, [user]);
  return <div className={`usertag ${tag}`}>{user}</div>;
};

export default UserTag;
