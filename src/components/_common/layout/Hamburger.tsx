import { HamburgerProps, HamburgerAccordionProps } from 'props-type';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import close from './../../../assets/icons/hamburger/close.svg';
import bulb from './../../../assets/icons/hamburger/mono-bulb.svg';
import doc from './../../../assets/icons/hamburger/mono-doc.svg';
import user from './../../../assets/icons/hamburger/mono-user.svg';
import arrow from './../../../assets/icons/hamburger/arrow-down.svg';

const HamburgerAccordion = ({
  title,
  icon,
  subMenus,
  onTitleClick,
}: HamburgerAccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState('off');
  const handleBtn = () => {
    if (accordionOpen === 'on') {
      setAccordionOpen('off');
    } else {
      setAccordionOpen('on');
    }
  };

  return (
    <div className="hamburger-accordion">
      <div className="hamburger-accordion-title">
        <img src={icon} className="hamburger-icon" />
        <div onClick={onTitleClick}>{title}</div>
        <img
          src={arrow}
          className={`arrow ${accordionOpen}`}
          onClick={() => {
            handleBtn();
          }}
        />
      </div>
      {accordionOpen === 'on' && (
        <div className="hamburger-accordion-content">
          {subMenus.map((sb, idx) => (
            <div key={idx} onClick={sb.onClick}>
              {sb.subMenu}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hamburger = ({ setIsOpen, isLogin }: HamburgerProps) => {
  const navigate = useNavigate();
  const handleNavigate = (uri: string) => {
    navigate(uri);
    setIsOpen(false);
  };
  const infoSubMenus = [
    {
      subMenu: '시니어 전문가',
      onClick: () => {
        handleNavigate('about-us');
      },
    },
    {
      subMenu: '기업 사용자',
      onClick: () => {
        handleNavigate('about-us');
      },
    },
  ];
  const resumeSubMenus = [
    {
      subMenu: '이력서 관리',
      onClick: () => {
        handleNavigate('resume');
      },
    },
  ];
  const searchSubMenus = [
    {
      subMenu: 'AI 인재 추천',
      onClick: () => {
        handleNavigate('search');
      },
    },
    {
      subMenu: '면접 제안 관리',
      onClick: () => {
        console.log('면접 제안 관리');
      },
    },
  ];

  return (
    <>
      <div className="modal-bg-div"></div>
      <div className="hamburger-container">
        <img
          src={close}
          className="hamburger-close"
          onClick={() => setIsOpen(false)}
        />
        {isLogin ? (
          <button
            className="hamburger-btn white"
            onClick={() => navigate('/my-page')}
          >
            내 정보
          </button>
        ) : (
          <button
            className="hamburger-btn white"
            onClick={() => navigate('/sign-in')}
          >
            로그인/회원가입
          </button>
        )}
        <HamburgerAccordion
          title="서비스 소개"
          icon={bulb}
          subMenus={infoSubMenus}
          onTitleClick={() => {
            handleNavigate('about-us');
          }}
        />
        <HamburgerAccordion
          title="이력서 관리"
          icon={doc}
          subMenus={resumeSubMenus}
          onTitleClick={() => {
            handleNavigate('resume');
          }}
        />
        <HamburgerAccordion
          title="인재풀 조회"
          icon={user}
          subMenus={searchSubMenus}
          onTitleClick={() => {
            handleNavigate('search');
          }}
        />
      </div>
    </>
  );
};
export default Hamburger;
