import { useState } from 'react';
import NoticeList from './NoticeList';

const NoticeTab = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabType = [
    { label: '새로운 알림', isOld: false },
    { label: '지난 알림', isOld: true },
  ];
  return (
    <div className="tab-div">
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
      <NoticeList isOld={tabType[activeIndex].isOld} />
    </div>
  );
};

export default NoticeTab;
