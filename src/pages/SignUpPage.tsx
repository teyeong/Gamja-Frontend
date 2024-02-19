import Title from 'components/_common/Title';
import { Outlet } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <>
      <Title label="회원가입" />
      <Outlet />
    </>
  );
};

export default SignUpPage;
