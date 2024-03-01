import Title from 'components/_common/Title';
import { Outlet } from 'react-router-dom';

const FindIdPage = () => {
  return (
    <div className="find-main-div">
      <Title label="아이디 찾기" />
      <Outlet />
    </div>
  );
};

export default FindIdPage;
