import Title from 'components/_common/Title';
import { Outlet } from 'react-router-dom';

const FindPwPage = () => {
  return (
    <div className="find-main-div">
      <Title label="비밀번호 찾기" />
      <Outlet />
    </div>
  );
};

export default FindPwPage;
