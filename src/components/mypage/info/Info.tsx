import Btn from 'components/_common/Btn';
import InfoForm from './InfoForm';

const Info = () => {
  return (
    <div className="info-div">
      <div className="mypage-flexdiv">
        <p className="mypage-title">기본 정보</p>
        <Btn
          label="수정"
          onClick={() => (window.location.href = '/my-page/edit')}
          styleClass="short-btn dark-green"
        />
      </div>
      <InfoForm />
    </div>
  );
};

export default Info;
