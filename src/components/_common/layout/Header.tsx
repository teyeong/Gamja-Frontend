import notice from '../../../assets/icons/notice.svg';
import hamburger from '../../../assets/icons/hamburger.svg';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isLogin = false;
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:785px)',
  });
  return (
    <div className="header">
      <div className="header_logo">다시</div>
      {isMobile ? (
        <div style={{ display: 'flex' }}>
          <img className="header_icon" src={notice} />
          <img className="header_icon" src={hamburger} />
        </div>
      ) : (
        <>
          <div className="header_txt_container">
            <div className="header_txt">서비스 소개</div>
            <div className="header_txt">이력서 관리</div>
            <div className="header_txt">인재풀</div>
          </div>
          {isLogin ? (
            <div style={{ display: 'flex' }}>
              <img className="header_icon" src={notice} />
              <button className="header_btn">내 정보</button>
            </div>
          ) : (
            <button className="header_btn">로그인/회원가입</button>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
