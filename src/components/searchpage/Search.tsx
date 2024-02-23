import Banner from 'components/_common/Banner';
import ResumeLongCard from './ResumeLongCard';
import { Select, Tooltip } from 'antd';
import banner from '../../assets/images/banner.png';
import filter from '../../assets/icons/filter.svg';
import profile from '../../assets/images/profile.png';
import info from '../../assets/icons/info.svg';

const Search = () => {
  const filterData = [
    { value: '추천순', label: '추천순' },
    { value: '조회수 높은순', label: '조회수 높은순' },
    { value: '리뷰 높은순', label: '리뷰 높은순' },
    { value: '업데이트순', label: '업데이트순' },
  ];
  const workType = ['강연', '멘토링'];
  const skills = ['React', 'JavaScript', 'TypeScript'];
  const commentData = [
    { commentType: 1, comments: ['OO님', '96%'] },
    { commentType: 2, comments: ['React.js', 'Vue.js'] },
  ];
  const tooltipTxt = `예시) 기계 산업 도면에 대한 경험 또는 교육을 받은 자`;
  return (
    <div className="container">
      <Banner
        image={banner}
        title="AI 인재 추천"
        content="다시가 선별한 시니어 전문가들을 만나보세요!"
        subContent="AI 기술을 이용한 맞춤형 인재 추천 서비스"
      />
      <div className="sub-container">
        <div className="search-title-container">
          <div className="search-info-container">
            <div className="search-title">업무 한 줄 소개</div>
            <Tooltip title={tooltipTxt} color={'#41c0f2'}>
              <img src={info} />
            </Tooltip>
          </div>
          <div className="filter-container white">
            <img src={filter} />
          </div>
        </div>
        <input
          className="search-input"
          placeholder="업무를 한 줄로 소개해 주세요."
        />
        <div className="search-title-container">
          <div className="search-subtitle">지금 떠오르는 인재</div>
          <Select
            className="filter-select"
            defaultValue="조회수 높은순"
            options={filterData}
          />
        </div>
        <div className="resume-long-card-container">
          <ResumeLongCard
            title="김**"
            careerYear={1}
            jobName="프론트엔드 개발자"
            date="2024.01.18"
            workType={workType}
            skills={skills}
            commuteType="원격"
            isVerified={true}
            resumeId={1}
            profileImage={profile}
          />
          <ResumeLongCard
            title="김**"
            careerYear={1}
            jobName="프론트엔드 개발자"
            date="2024.01.18"
            workType={workType}
            skills={skills}
            commuteType="원격"
            isVerified={true}
            resumeId={1}
            profileImage={profile}
            recommendComments={commentData}
          />
          <ResumeLongCard
            title="김**"
            careerYear={1}
            jobName="프론트엔드 개발자"
            date="2024.01.18"
            workType={workType}
            skills={skills}
            commuteType="원격"
            isVerified={true}
            resumeId={1}
            profileImage={profile}
            recommendComments={commentData}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
