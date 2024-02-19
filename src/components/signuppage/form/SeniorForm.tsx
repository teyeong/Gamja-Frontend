import Terms from './Terms';
import Input from 'components/_common/Input';
import Btn from 'components/_common/Btn';

import mockUser from '../../../assets/mock/info.json';
import { useEffect, useState } from 'react';
import { InfoFormData } from 'data-type';

const SeniorForm = () => {
  const [data, setData] = useState<Partial<InfoFormData>>({});

  useEffect(() => {
    setData(mockUser);
  }, []);

  const [id, setId] = useState('');
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
    <div className="signup-form-div">
      <Terms />
      <div className="input-div inputs-div">
        <Input label="이름" content={data.name || ''} />
        <div className="input-div">
          <Input
            label="아이디"
            onChange={(e) => setId(e.target.value)}
            isRequired={true}
          />
          <Btn
            label="중복 확인"
            onClick={() => console.log('중복 확인 클릭')}
            styleClass="short-btn dark-green"
          />
        </div>
        <Input
          label="비밀번호"
          onChange={(e) => setPw(e.target.value)}
          isRequired={true}
          type="password"
        />
        <Input
          label="비밀번호 확인"
          onChange={(e) => setPwCheck(e.target.value)}
          isRequired={true}
          type="password"
          isWrong={isWrong}
          alertText={alertText}
        />
        <Input label="전화번호" content={data.phone || ''} />
        <Input label="이메일" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => (window.location.href = '/sign-up/user-type')}
          styleClass="row-btn white"
        />
        <Btn
          label="회원가입"
          onClick={() => (window.location.href = '/sign-up/complete')}
          styleClass="row-btn dark-green"
        />
      </div>
    </div>
  );
};

export default SeniorForm;
