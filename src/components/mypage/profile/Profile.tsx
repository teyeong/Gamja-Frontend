import Picture from 'components/_common/Picture';
import UserTag from './UserTag';

import mockUser from '../../../assets/mock/profile.json';
import { useEffect, useState } from 'react';
import { ProfileData } from 'data-type';

const Profile = () => {
  const [data, setData] = useState<Partial<ProfileData>>({});

  useEffect(() => {
    setData(mockUser);
  }, []);

  return (
    <>
      <p className="mypage-title mypage-flexdiv profile-title">프로필</p>
      <div className="profile-div light-gray">
        <Picture src={data.src} />
        <div className="profile-user-box">
          <div className="profile-username">
            <p>{data.name}</p>
            <p>님</p>
          </div>
          <UserTag user={data.user ?? ''} />
        </div>
      </div>
    </>
  );
};

export default Profile;
