import Btn from 'components/_common/Btn';
import { useNavigate } from 'react-router-dom';

const FindIdResult = () => {
  const navigate = useNavigate();
  return (
    <div className="find-result-wrapper">
      <div>
        <p>고객님의 회원정보와 아이디입니다.</p>
        <p>qwerty</p>
      </div>
      <div className="btns-div">
        <Btn
          label="로그인하기"
          onClick={() => navigate('/sign-in')}
          styleClass="abreast-btn dark-green"
        />
        <Btn
          label="비밀번호 찾기"
          onClick={() => navigate('/find/pw/form')}
          styleClass="abreast-btn white"
        />
      </div>
    </div>
  );
};

export default FindIdResult;
