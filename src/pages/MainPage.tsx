import Contents from 'components/mainpage/Contents';
import MainBanner from 'components/mainpage/MainBanner';

const MainPage = () => {
  return (
    <div className="main-div">
      <MainBanner />
      <Contents />
    </div>
  );
};

export default MainPage;
