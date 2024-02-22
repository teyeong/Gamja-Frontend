import { ResumeCardProps } from 'props-type';
import { Link } from 'react-router-dom';
import more from '../../assets/icons/more.svg';
import verified from '../../assets/icons/verified.svg';
const ResumeCard = ({
  isDefault = false,
  title,
  jobName,
  date,
  workType,
  commuteType,
  isVerified = false,
  resumeId,
}: ResumeCardProps) => {
  const url = `/resume/edit/${resumeId}`;
  return (
    <Link to={url}>
      <div className="resume-card">
        <img className="menu-icon" src={more} />
        {isDefault && <div className="resume-tag red-tag">기본 이력서</div>}
        <div className="resume-card-contents">
          <div className="resume-card-title">{title}</div>
          <div className="resume-card-job">{jobName}</div>
          <div className="resume-card-date">{date}</div>
        </div>
        <div className="resume-card-tags">
          {workType.map((wt, index) => (
            <div className="resume-tag green-tag" key={index}>
              {wt}
            </div>
          ))}
          <div className="resume-tag blue-tag">{commuteType}</div>
          {isVerified && (
            <div className="resume-tag blue-tag">
              <img src={verified} />
              경력 검증
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
export default ResumeCard;
