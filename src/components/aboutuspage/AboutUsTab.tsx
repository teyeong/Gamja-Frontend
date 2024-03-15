import { NavLink } from 'react-router-dom';

const AboutUsTab = () => {
  return (
    <div className="about-tab-div">
      <div>
        <NavLink
          to="senior"
          className={({ isActive }) =>
            isActive ? 'senior-active' : 'senior-default light-gray'
          }
        >
          시니어 회원
        </NavLink>
        <NavLink
          to="company"
          className={({ isActive }) =>
            isActive ? 'company-active' : 'company-default light-gray'
          }
        >
          기업 회원
        </NavLink>
      </div>
    </div>
  );
};

export default AboutUsTab;
