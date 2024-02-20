import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';

import { useState } from 'react';

const InfoEdit = () => {
  const [phoneEdit, setPhoneEdit] = useState(false);

  return (
    <div className="indoedit-div">
      <div className="row-input-div inputs-div">
        <Input label="이름" styleClass="row" />
        <Input label="아이디" styleClass="row" />
        <Input label="비밀번호" styleClass="row" />
        <Input label="비밀번호 확인" styleClass="row" />
        {phoneEdit ? (
          <div>
            <div className="phone-input-div">
              <Input
                label="연락처"
                styleClass="phone-input phone-num"
                placehoder="전화번호 입력"
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
                placehoder="인증번호 입력"
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
            <Input label="연락처" styleClass="row" />
            <Btn
              label="수정"
              onClick={() => setPhoneEdit(true)}
              styleClass="row-btn short-btn dark-green"
            />
          </div>
        )}
        <Input label="이메일" styleClass="row" />
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
