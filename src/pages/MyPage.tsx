import Title from 'components/_common/Title';
import Info from 'components/mypage/info/Info';
import Profile from 'components/mypage/profile/Profile';
import DefaultResume from 'components/mypage/defaultResume/DefaultResume';

const MyPage = () => {
  return (
    <>
      <Title label="내 정보" />
      <div className="mypage-div">
        <Info />
        <div className="mypage-small-div">
          <Profile />
          <DefaultResume />
        </div>
      </div>
    </>
  );
};

export default MyPage;
