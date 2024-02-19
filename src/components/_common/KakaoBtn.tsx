import kakao from '../../assets/icons/kakao.svg';

const KakaoBtn = () => {
  return (
    <div className="kakao-btn kakao-color">
      <img src={kakao} />
      <p>카카오 로그인</p>
    </div>
  );
};

export default KakaoBtn;
