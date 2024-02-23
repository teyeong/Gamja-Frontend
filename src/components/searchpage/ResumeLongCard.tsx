import { ResumeCardProps } from 'props-type';
import { Link } from 'react-router-dom';
import verified from '../../assets/icons/verified.svg';
import check from '../../assets/icons/check.svg';
const ResumeLongCard = ({
  isDefault = false,
  isVerified = false,
  title,
  jobName,
  date,
  workType,
  skills = [],
  commuteType,
  resumeId,
  profileImage,
  careerYear,
  recommendComments = [],
}: ResumeCardProps) => {
  const url = `/resume/detail/${resumeId}`;
  return (
    <Link to={url}>
      <div className="resume-long-card">
        <img className="resume-card-profile" src={profileImage} />
        <div className="resume-long-card-contents">
          <div className="resume-title-container">
            <div className="resume-card-title">{title}</div>
            <div className="resume-card-tags">
              <div className="resume-tag blue-tag">{commuteType}</div>
              {isVerified && (
                <div className="resume-tag blue-tag">
                  <img src={verified} />
                  경력 검증
                </div>
              )}
            </div>
          </div>
          <div className="resume-card-job">
            {jobName} ({careerYear}년차)
          </div>
          <div className="resume-card-tags">
            {workType.map((wt, index) => (
              <div className="resume-tag green-tag" key={index}>
                {wt}
              </div>
            ))}
          </div>
          <div className="resume-card-tags">
            {skills.map((sk, index) => (
              <div className="resume-tag gray-tag" key={index}>
                {sk}
              </div>
            ))}
          </div>
          {recommendComments.length != 0 && (
            <div className="resume-comment-container">
              {recommendComments.map((cm, index) => (
                <div className="resume-title-container" key={index}>
                  <img src={check} />
                  <div className="resume-comment-txt">
                    {cm.commentType == 1 && (
                      <>
                        <span>{cm.comments[0]}</span>의 요구사항과
                        <span>{cm.comments[1]}</span> 일치해요!
                      </>
                    )}
                    {cm.commentType == 2 && (
                      <>
                        <span>{cm.comments[0]}</span>와{' '}
                        <span>{cm.comments[1]}</span>를 능숙하게 다룰 수 있어요!
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
export default ResumeLongCard;
