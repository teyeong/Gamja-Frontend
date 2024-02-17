import Btn from 'components/_common/Btn';
import KakaoBtn from 'components/_common/KakaoBtn';

const Verification = () => {
  return (
    <div className="signup-veri-div">
      <p className="signup-text">
        휴대폰 본인 인증 또는
        <br />
        카카오 로그인으로
        <br />
        가입을 진행해 주세요.
      </p>
      <Btn
        label="휴대폰 본인 인증"
        onClick={() => (window.location.href = '/sign-up/user-type')}
        styleClass="long-btn dark-green"
      />
      <KakaoBtn />
    </div>
  );
};

export default Verification;
