import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeInput from './ResumeInput';
import ResumeIntro from './ResumeIntro';

const ResumeEdit = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabType = [
    { label: '이력서', user: 'resume' },
    { label: '전문가 소개', user: 'senior_info' },
  ];
  const isSubmitted = false;

  return (
    <div className="sub-container">
      <div className="resume-tab-div">
        <div className="tab-wrapper">
          {tabType.map((tab, index) => (
            <div
              key={index}
              className={`${activeIndex === index && 'active'}`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      {activeIndex == 0 ? <ResumeInput /> : <ResumeIntro />}

      <div className="work-type-container">
        <button
          className={`resume-submit-btn ${'white'}`}
          onClick={() => navigate('/resume')}
        >
          임시 저장
        </button>
        {isSubmitted ? (
          <button
            className={`resume-submit-btn ${'dark-green'}`}
            onClick={() => navigate('/resume')}
          >
            인재풀 재등록
          </button>
        ) : (
          <button
            className={`resume-submit-btn ${'dark-green'}`}
            onClick={() => navigate('/resume')}
          >
            인재풀 등록
          </button>
        )}
      </div>
    </div>
  );
};

export default ResumeEdit;
