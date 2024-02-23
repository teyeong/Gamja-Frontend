import BannerBtn from './BannerBtn';
import ResumeCard from './ResumeCard';
import resume from '../../assets/icons/resume.svg';
import { Link } from 'react-router-dom';

const ResumeList = () => {
  const workType = ['강연', '멘토링'];
  return (
    <div className="container">
      <Link to="/resume/edit">
        <BannerBtn
          title="새 이력서 작성하기"
          content="이력서 등록하고 새로운 미래 찾아보기"
          svg={resume}
          styleClass="dark-green"
        />
      </Link>
      <div className="resume-card-container">
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
        <ResumeCard
          title="이력서 2"
          jobName="프론트엔드 개발자"
          date="2024.01.18"
          workType={workType}
          commuteType="원격"
          resumeId={2}
        />
        <ResumeCard
          title="이력서 3"
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
