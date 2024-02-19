import { useEffect, useState } from 'react';
import { InfoFormData } from 'data-type';
import info from '../../../assets/mock/info.json';
import Btn from 'components/_common/Btn';

const InfoForm = () => {
  const [data, setData] = useState<Partial<InfoFormData>>({});

  useEffect(() => {
    setData(info);
  }, []);

  return (
    <div className="infoForm-div light-gray">
      <div className="infoForm-box">
        <p>이름</p>
        <p>{data.name}</p>
      </div>
      <div className="infoForm-box">
        <p>아이디</p>
        <p>{data.id}</p>
      </div>
      <div className="infoForm-box">
        <p>연락처</p>
        <p>{data.phone}</p>
      </div>
      <div className="infoForm-box">
        <p>이메일</p>
        <p>{data.email}</p>
      </div>
      <div className="infoForm-btn-box">
        <Btn
          label="로그아웃"
          onClick={() => console.log('로그아웃 클릭')}
          styleClass="mini-btn light-gray"
        />
        <Btn
          label="회원탈퇴"
          onClick={() => console.log('회원탈퇴 클릭')}
          styleClass="mini-btn red"
        />
      </div>
    </div>
  );
};

export default InfoForm;
