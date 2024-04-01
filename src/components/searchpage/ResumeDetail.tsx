import { useNavigate } from 'react-router-dom';
import profile from '../../assets/images/profile.png';
import verified from '../../assets/icons/verified.svg';

const ResumeDetail = () => {
  const isVerified = true;
  const workType = ['강연', '멘토링'];
  const navigate = useNavigate();
  return (
    <div className="sub-container">
      <div className="resume-detail-info">
        <img className="profile" src={profile} />
        <div className="resume-card-contents">
          <div className="name">
            <div className="resume-card-title">김**</div>
            <div className="resume-card-tags">
              <div className="resume-tag blue-tag">원격</div>
              <div className="resume-tag blue-tag">10년</div>
              {isVerified && (
                <div className="resume-tag blue-tag">
                  <img src={verified} />
                  경력 검증
                </div>
              )}
            </div>
          </div>
          <div className="resume-card-job">개발{`>`} 프론트엔드 개발자</div>
          <div className="resume-card-tags">
            {workType.map((wt, index) => (
              <div className="resume-tag green-tag" key={index}>
                {wt}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="search-filter-confirm-btn"
        onClick={() => {
          navigate('/proposal');
        }}
      >
        채용 제안하기
      </button>
    </div>
  );
};
export default ResumeDetail;
