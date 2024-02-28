import Title from 'components/_common/Title';
import { Outlet } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="signup-main-div">
      <Title label="회원가입" />
      <Outlet />
    </div>
  );
};

export default SignUpPage;
