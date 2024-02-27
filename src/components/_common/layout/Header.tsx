import notice from '../../../assets/icons/notice.svg';
import hamburger from '../../../assets/icons/hamburger.svg';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const isLogin = false;
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_logo" onClick={() => navigate('/')}>
        다시
      </div>
      {isMobile ? (
        <div style={{ display: 'flex' }}>
          <img
            className="header_icon"
            onClick={() => navigate('/notice')}
            src={notice}
          />
          <img className="header_icon" src={hamburger} />
        </div>
      ) : (
        <>
          <div className="header_txt_container">
            <div className="header_txt" onClick={() => navigate('/about-us')}>
              서비스 소개
            </div>
            <div className="header_txt" onClick={() => navigate('/resume')}>
              이력서 관리
            </div>
            <div className="header_txt" onClick={() => navigate('/search')}>
              인재풀 조회
            </div>
          </div>
          {isLogin ? (
            <div style={{ display: 'flex' }}>
              <img className="header_icon" src={notice} />
              <button
                className="header_btn"
                onClick={() => navigate('/my-page')}
              >
                내 정보
              </button>
            </div>
          ) : (
            <button className="header_btn" onClick={() => navigate('/sign-in')}>
              로그인/회원가입
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
