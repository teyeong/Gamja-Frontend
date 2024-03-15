import Title from 'components/_common/Title';
import AboutUsTab from 'components/aboutuspage/AboutUsTab';
import { Outlet } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <>
      <Title label="서비스 소개" />
      <AboutUsTab />
      <Outlet />
    </>
  );
};

export default AboutUsPage;
