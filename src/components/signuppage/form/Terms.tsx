import { useState } from 'react';

const Terms = () => {
  const [agree, setAgree] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleAgree = () => {
    setAgree(true);
    setIsOpen(false);
  };

  const handleDisagree = () => {
    setAgree(false);
  };

  return (
    <div className="terms-div">
      <div className="terms-title-div" onClick={handleOpen}>
        <p>개인정보동의</p>
        <div>
          <div className="square gray">
            <div className={`${agree && 'check-arrow'}`}></div>
          </div>
          <p>동의</p>
          {isOpen ? (
            <div className="up-arrow"></div>
          ) : (
            <div className="down-arrow"></div>
          )}
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="terms-text light-gray">
            <p>
              본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제15조 및
              제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데
              동의합니다.
              <br />
              <br />□ 개인정보의 수집 및 이용에 관한 사항
              <br />- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명,
              주민등록번호, 전화번호, 주소, 이메일, 가족관계, 학력사항,
              경력사항, 자격사항 등과 그 外 이력서 기재 내용 일체 <br />
              - 개인정보의 이용 목적 : 수집된 개인정보를 사업장 신규 채용 서류
              심사 및 인사서류로 활용하며, 목적 외의 용도로는 사용하지 않습니다.
              <br />
              <br />□ 개인정보의 보관 및 이용 기간 - 귀하의 개인정보를 다음과
              같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 [개인정보
              보호법] 제21조에 따라 처리합니다.
              <br />
              <br />
              <br />□ 본인은 개인정보 수집 및 이용에 대하여
              <br />
              [□ 동의합니다 □ 비동의합니다]
            </p>
          </div>
          <div className="terms-check-div">
            <div className="checkbox">
              <div className="square gray" onClick={handleAgree}>
                <div className={`${agree && 'check-arrow'}`}></div>
              </div>
              <p>동의</p>
            </div>
            <div className="checkbox">
              <div className="square gray" onClick={handleDisagree}>
                <div className={`${!agree && 'check-arrow'}`}></div>
              </div>
              <p>비동의</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terms;
