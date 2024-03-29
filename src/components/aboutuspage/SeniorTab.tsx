import senior from '../../assets/icons/aboutus/about-senior.svg';
import mentor from '../../assets/icons/aboutus/about-mentor.png';
import project from '../../assets/icons/aboutus/about-project.png';

const SeniorTab = () => {
  return (
    <div className="about-div">
      <div className="about-desc-div">
        <div className="about-title-div">
          <img src={senior} />
          <p>시니어 회원</p>
        </div>
        <div className="about-content-div">
          <li>다시에서 이력서를 등록하고, 일자리 제안을 받을 수 있어요.</li>
          <li>은퇴 후에도 경력을 살려 전문가로 재취업할 기회를 얻어요.</li>
        </div>
      </div>
      <div className="about-desc-div">
        <p className="about-subtitle">이력서 등록</p>
        <div className="about-content-div">
          <li>보유한 스킬을 선택할 수 있어요.</li>
          <li>희망하는 고용 형태, 급여, 근무 형태를 선택할 수 있어요.</li>
          <li>가지고 있는 이력서 파일을 업로드하면 경력 정보를 추출해줘요.</li>
        </div>
      </div>
      <div className="about-desc-div">
        <p className="about-subtitle">희망 고용 형태</p>
        <div className="about-icon-div">
          <div className="about-content">
            <div className="about-icon">
              <img src={mentor} />
            </div>
            <div>
              <p>멘토링</p>
              <p>멘토가 되어 내 지식을 공유할 수 있어요.</p>
            </div>
          </div>
          <div className="about-content">
            <div className="about-icon">
              <img src={project} />
            </div>
            <div>
              <p>프로젝트 계약직</p>
              <p>단기적으로 기업의 프로젝트에 참여해요.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-desc-div">
        <p className="about-subtitle">채용 수락</p>
        <div className="about-content-div">
          <li>
            기업에서 보낸 채용 제안서를 보고 채용 수락 혹은 거절을 선택할 수
            있어요.
          </li>
        </div>
      </div>
    </div>
  );
};

export default SeniorTab;
