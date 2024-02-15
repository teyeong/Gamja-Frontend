import Btn from 'components/_common/Btn';

const DefaultResume = () => {
  return (
    <div className="defaultResume-div">
      <div className="mypage-flexdiv">
        <p className="mypage-title">기본 이력서</p>
        <Btn
          label="변경"
          onClick={() => (window.location.href = '/resume')}
          styleClass="short-btn dark-green"
        />
      </div>
      {/* temporary resume format */}
      <div className="temp-resume light-gray">이력서</div>
    </div>
  );
};

export default DefaultResume;
