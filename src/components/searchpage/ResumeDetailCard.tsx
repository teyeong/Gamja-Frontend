import { ResumeLongCardProps } from 'props-type';
import { useMediaQuery } from 'react-responsive';
import verified from '../../assets/icons/verified.svg';
const ResumeDetailCard = ({
  isVerified = false,
  seniorName,
  jobGroup,
  jobName,
  commuteType,
  resumeId,
  profileImage,
  careerYear,
  needSubinfo = false,
  durationStart,
  durationEnd,
  payStart,
  payEnd,
}: ResumeLongCardProps) => {
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });
  return (
    <div className="resume-detail-card">
      <div className="resume-detail-info">
        <img className="profile" src={profileImage} />
        <div className="resume-card-contents">
          <div className="name">
            <div className="resume-card-title">{seniorName}</div>
            <div className="resume-card-tags">
              <div className="resume-tag blue-tag">{commuteType}</div>
              <div className="resume-tag blue-tag">{careerYear}년차</div>
              {isVerified && (
                <div className="resume-tag blue-tag">
                  <img src={verified} />
                  검증됨
                </div>
              )}
            </div>
          </div>
          <div className="resume-card-job">
            {jobGroup}
            {` > `}
            {jobName}
          </div>
          {!isMobile && needSubinfo && (
            <div className="resume-card-subinfo">
              <div>
                희망 근무 기간: {durationStart}개월 ~ {durationEnd}개월
              </div>
              <div>/</div>
              <div>
                희망 급여: 월 {payStart}만원 ~ {payEnd}만원
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobile && needSubinfo && (
        <div className="resume-card-subinfo">
          <div>
            희망 근무 기간: {durationStart}개월 ~ {durationEnd}개월
          </div>
          <div>
            희망 급여: 월 {payStart}만원 ~ {payEnd}만원
          </div>
        </div>
      )}
    </div>
  );
};
export default ResumeDetailCard;
