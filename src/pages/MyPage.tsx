import Title from 'components/_common/Title';
import Info from 'components/mypage/info/Info';
import Profile from 'components/mypage/profile/Profile';
import DefaultResume from 'components/mypage/defaultResume/DefaultResume';
import { useMediaQuery } from 'react-responsive';

const MyPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:802px)',
  });
  return (
    <>
      <Title label="내 정보" />
      {isMobile ? (
        <div className="mypage-div">
          <div className="mypage-mobile-div">
            <Profile />
            <Info />
            <DefaultResume />
          </div>
        </div>
      ) : (
        <div className="mypage-div">
          <Info />
          <div className="mypage-small-div">
            <Profile />
            <DefaultResume />
          </div>
        </div>
      )}
    </>
  );
};

export default MyPage;
