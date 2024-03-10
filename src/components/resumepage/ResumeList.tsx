import BannerBtn from './BannerBtn';
import ResumeCard from './ResumeCard';
import resume from '../../assets/icons/resume.svg';
import { useNavigate } from 'react-router-dom';

const ResumeList = () => {
  const workType = ['강연', '멘토링'];
  const navigate = useNavigate();
  return (
    <div className="sub-container">
      <BannerBtn
        title="새 이력서 작성하기"
        content="새로운 이력서 등록하기"
        svg={resume}
        styleClass="dark-green"
        onClick={() => navigate('/resume/edit/new')}
      />
      <div className="resume-card-container">
        <ResumeCard
          isDefault={true}
          title="이력서 1"
          jobGroup="개발"
          jobName="프론트엔드 개발자"
          date="2024.01.18"
          workType={workType}
          commuteType="원격"
          isVerified={true}
          resumeId={1}
        />
        <ResumeCard
          title="이력서 2"
          jobGroup="개발"
          jobName="프론트엔드 개발자"
          date="2024.01.18"
          workType={workType}
          commuteType="원격"
          resumeId={2}
        />
        <ResumeCard
          title="이력서 3"
          jobGroup="개발"
          jobName="프론트엔드 개발자"
          date="2024.01.18"
          workType={workType}
          commuteType="원격"
          resumeId={3}
        />
      </div>
    </div>
  );
};

export default ResumeList;
