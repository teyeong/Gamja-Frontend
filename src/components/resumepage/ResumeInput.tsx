import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import SelectTag from './SelectTag';
import BannerBtn from './BannerBtn';
import Record from './Record';
import UploadBtn from './UploadBtn';
import PaySlider from '../_common/PaySlider';
import Label from 'components/_common/Label';
import resume from '../../assets/icons/resume/resume.svg';
import bulb from '../../assets/icons/resume/bulb.svg';

const ResumeInput = () => {
  const [selectedArea, setSelectedArea] = useState('직군');
  const [selectedJob, setSelectedJob] = useState('직무');
  const [selectedCareer, setSelectedCareer] = useState('0년');
  const navigate = useNavigate();

  const onAreaChange = () => {
    setSelectedJob('직무');
  };

  const areaData = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
  ];
  const jobData = [{ value: 'Yiminghe', label: 'yiminghe' }];
  const yearData = [
    { value: 1, label: '1년' },
    { value: 2, label: '2년' },
  ];
  const skills: SelectProps['options'] = [
    // 보유 기술
    { value: 1, label: '1년' },
    { value: 2, label: '2년' },
  ];
  const commuteTypeData = [
    { value: '상주 근무', label: '상주 근무' },
    { value: '원격 근무', label: '원격 근무' },
    { value: '상주 근무 및 원격 근무', label: '상주 근무 및 원격 근무' },
  ];

  return (
    <>
      <div className="resume-banner-container">
        <BannerBtn
          title="이력서 자동완성"
          content="기존 이력서 파일 업로드"
          svg={resume}
          styleClass="dark-green"
        />
        <BannerBtn
          title="경력 인증하기"
          content="건강보험공단 통해 경력 조회"
          svg={bulb}
          styleClass="dark-blue"
        />
      </div>
      <div className="resume-input-container input-div">
        <div>
          <Label label="직군 및 직무" isRequired={true} />
          <div className="select-container">
            <Select
              className="select-mini"
              defaultValue="직군"
              onChange={onAreaChange}
              options={areaData}
            />
            <Select
              className="select-mini"
              defaultValue="직무"
              onChange={onAreaChange}
              options={jobData}
            />
          </div>
        </div>
        <div>
          <Label label="총 경력" isRequired={true} />
          <Select
            className="select"
            defaultValue="총 경력"
            onChange={onAreaChange}
            options={yearData}
          />
        </div>
        <div>
          <Label label="보유 스킬 및 자격증" isRequired={true} />
          <Select
            className="select multiple"
            mode="multiple"
            tagRender={SelectTag}
            allowClear
            placeholder="스킬을 검색해 주세요"
            defaultValue={[]}
            options={skills}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="경력사항" isRequired={true} />
          <button className="add-record-btn">+추가</button>
          <Record firstPlaceholder="회사명" secondPlaceholder="부서/직책명" />
          <button className="add-mini-record-btn">+주요 성과 추가</button>
          <Record
            isMini={true}
            firstPlaceholder="성과명"
            secondPlaceholder="상세 업무 내용을 기입해주세요"
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="학력사항" isRequired={true} />
          <button className="add-record-btn">+추가</button>
          <Record firstPlaceholder="학교명" secondPlaceholder="학위/전공명" />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="프로젝트 이력" isRequired={true} />
          <button className="add-record-btn">+추가</button>
          <Record
            needDetail={true}
            firstPlaceholder="프로젝트명"
            secondPlaceholder="상세 작업 내용을 기입해주세요"
          />
        </div>
        <div>
          <Label label="포트폴리오 파일" />
          <UploadBtn />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="희망 근무 기간" isRequired={true} />
          <PaySlider isDuration={true} />
        </div>
        <div>
          <Label label="희망 급여" isRequired={true} />
          <div className="slider-container">
            <PaySlider isPay={true} />
          </div>
        </div>
        <div>
          <Label label="희망 근무 형태" isRequired={true} />
          <Select
            className="select-long"
            defaultValue="상주 근무"
            onChange={onAreaChange}
            options={commuteTypeData}
          />
        </div>
      </div>
    </>
  );
};
export default ResumeInput;
