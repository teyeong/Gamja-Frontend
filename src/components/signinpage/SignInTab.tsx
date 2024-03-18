import { useState } from 'react';
import SignInForm from './SignInForm';

const SignInTab = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabType = [
    { label: '시니어 회원', user: 'senior' },
    { label: '기업 회원', user: 'company' },
  ];
  return (
    <div className="signin-tab">
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
      <SignInForm user={tabType[activeIndex].user} />
    </div>
  );
};

export default SignInTab;
