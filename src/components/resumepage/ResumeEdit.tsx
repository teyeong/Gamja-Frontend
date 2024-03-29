import { useState } from 'react';
import ResumeInput from './ResumeInput';
import ResumeIntro from './ResumeIntro';

const ResumeEdit = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabType = [
    { label: '이력서', user: 'resume' },
    { label: '전문가 소개', user: 'senior_info' },
  ];

  return (
    <div className="sub-container">
      <div className="tab-div">
        <div className="resume-tab">
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
    </div>
  );
};

export default ResumeEdit;
