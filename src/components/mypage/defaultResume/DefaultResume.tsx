import Btn from 'components/_common/Btn';
import ResumeCard from 'components/resumepage/ResumeCard';

const DefaultResume = () => {
  const workType = ['강연', '멘토링'];
  return (
    <div className="defaultResume-div">
      <div className="mypage-flexdiv">
        <p className="mypage-title">기본 이력서</p>
        <Btn
          label="변경"
          onClick={() => (window.location.href = '/resume')}
          styleClass="short-btn dark-green"
        />
      </div>
      <ResumeCard
        isDefault={true}
        title="이력서 1"
        jobName="프론트엔드 개발자"
        date="2024.01.18"
        workType={workType}
        commuteType="원격"
        isVerified={true}
        resumeId={1}
      />
    </div>
  );
};

export default DefaultResume;
