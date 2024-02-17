import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';
import KakaoBtn from 'components/_common/KakaoBtn';
import { UserProps } from 'props-type';

import { useNavigate } from 'react-router-dom';

const SignInForm = ({ user }: UserProps) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (user === 'senior') {
      console.log('시니어 회원 로그인');
    } else if (user === 'company') {
      console.log('기업 회원 로그인');
    }
  };

  // mini btns click event handler
  const handleBtnClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="signin-form">
      <div className="input-signin-div">
        <Input label="아이디" onChange={() => console.log('아이디')} />
        <Input
          label="비밀번호"
          onChange={() => console.log('비밀번호')}
          type="password"
        />
      </div>
      <div className="signin-btn-wrapper">
        <Btn
          label="로그인"
          onClick={handleSubmit}
          styleClass="dark-green long-btn"
        />
        <KakaoBtn />
      </div>
      <div className="signin-mini-btns">
        <button>아이디 찾기</button>
        <div className="line"></div>
        <button>비밀번호 찾기</button>
        <div className="line"></div>
        <button
          className="signup"
          onClick={() => handleBtnClick('/sign-up/verification')}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
