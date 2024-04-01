import { ResumeCardProps } from 'props-type';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import more from '../../assets/icons/more.svg';
import verified from '../../assets/icons/verified.svg';
import EditModal from './EditModal';
const ResumeCard = ({
  isDefault = false,
  title,
  jobGroup,
  jobName,
  date,
  workType,
  commuteType,
  isVerified = false,
  resumeId,
}: ResumeCardProps) => {
  const url = `/resume/edit/${resumeId}`;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="resume-card-wrapper">
      <div className="resume-card" onClick={() => navigate(url)}>
        {isDefault && <div className="resume-tag red-tag">기본 이력서</div>}
        <div className="resume-card-contents">
          <div className="resume-card-title">{title}</div>
          <div className="resume-card-job">
            {jobGroup} {`>`} {jobName}
          </div>
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
      <img
        className="resume-card-menu-icon"
        src={more}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && <EditModal setIsOpen={setIsOpen} />}
    </div>
  );
};
export default ResumeCard;
