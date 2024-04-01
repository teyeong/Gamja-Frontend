import { useNavigate } from 'react-router-dom';
import ResumeDetailCard from './ResumeDetailCard';
import profile from '../../assets/images/profile.png';

const ResumeDetail = () => {
  const isVerified = true;
  const navigate = useNavigate();
  return (
    <div className="sub-container">
      <ResumeDetailCard
        profileImage={profile}
        seniorName="김**"
        jobGroup="개발"
        jobName="프론트엔드 개발자"
        careerYear={10}
        commuteType="원격"
        isVerified={isVerified}
        resumeId={1}
        needSubinfo={true}
        durationStart={2}
        durationEnd={7}
        payStart={300}
        payEnd={500}
      />
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
