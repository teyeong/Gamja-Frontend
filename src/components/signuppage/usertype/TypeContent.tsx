import { UserProps } from 'props-type';
import { useEffect, useState } from 'react';

import senior from '../../../assets/icons/senior.svg';
import company from '../../../assets/icons/company.svg';

const TypeContent = ({ user }: UserProps) => {
  const [color, setColor] = useState('dark-green');
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (user === '시니어') {
      setColor('dark-green');
      setImgSrc(senior);
    } else if (user === '기업') {
      setColor('dark-blue');
      setImgSrc(company);
    }
  }, [user]);

  return (
    <div className={`${color} signup-type-div`}>
      <div>
        <p>{user} 회원가입</p>
        <div className="big-arrow"></div>
      </div>
      <img src={imgSrc} />
    </div>
  );
};

export default TypeContent;
