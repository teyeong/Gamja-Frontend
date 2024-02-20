import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';
import mockUser from '../../assets/mock/info.json';
import { InfoFormData } from 'data-type';

import { useEffect, useState } from 'react';

const InfoEdit = () => {
  const [data, setData] = useState<Partial<InfoFormData>>({});
  const [phoneEdit, setPhoneEdit] = useState(false);

  useEffect(() => {
    setData(mockUser);
  }, []);

  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [email, setEmail] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [alertText, setAlertText] = useState('');

  useEffect(() => {
    if (pwCheck === pw || !pwCheck) {
      setIsWrong(false);
      setAlertText('');
    } else {
      setIsWrong(true);
      setAlertText('비밀번호가 일치하지 않습니다.');
    }
  }, [pwCheck, pw]);

  return (
    <div className="indoedit-div">
      <div className="row-input-div inputs-div">
        <Input
          label="이름"
          styleClass="row"
          content={data.name}
          disabled={true}
        />
        <Input
          label="아이디"
          styleClass="row"
          content={data.id}
          disabled={true}
        />
        <Input
          label="비밀번호"
          styleClass="row"
          onChange={(e) => setPw(e.target.value)}
          type="password"
        />
        <Input
          label="비밀번호 확인"
          styleClass="row"
          onChange={(e) => setPwCheck(e.target.value)}
          isWrong={isWrong}
          alertText={alertText}
          type="password"
        />
        {phoneEdit ? (
          <div>
            <div className="phone-input-div">
              <Input
                label="연락처"
                styleClass="phone-input phone-num"
                placeholder="전화번호 입력"
              />
              <Btn
                label="인증번호 받기"
                onClick={() => console.log('인증번호 받기 클릭')}
                styleClass="row-btn short-btn dark-green"
              />
            </div>
            <div className="cert-input-div">
              <Input
                label=""
                styleClass="phone-input"
                placeholder="인증번호 입력"
              />
              <Btn
                label="수정 완료"
                onClick={() => setPhoneEdit(false)}
                styleClass="row-btn short-btn white"
              />
            </div>
          </div>
        ) : (
          <div className="row-input-div">
            <Input
              label="연락처"
              styleClass="row"
              content={data.phone}
              disabled={true}
            />
            <Btn
              label="수정"
              onClick={() => setPhoneEdit(true)}
              styleClass="row-btn short-btn dark-green"
            />
          </div>
        )}
        <Input
          label="이메일"
          styleClass="row"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => (window.location.href = '/my-page')}
          styleClass="abreast-btn white"
        />
        <Btn
          label="저장"
          onClick={() => (window.location.href = '/my-page')}
          styleClass="abreast-btn dark-green"
        />
      </div>
    </div>
  );
};

export default InfoEdit;
