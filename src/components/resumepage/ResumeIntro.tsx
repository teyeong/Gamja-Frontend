import Input from 'components/_common/Input';
import Label from 'components/_common/Label';
import { useNavigate } from 'react-router-dom';

const ResumeIntro = () => {
  const navigate = useNavigate();
  const isSubmitted = true;
  return (
    <div className="resume-input-container input-div">
      <Input
        label="이력서 제목"
        isRequired={true}
        placeholder="제목을 입력하세요."
        isAlertRequired={false}
      />
      <div>
        <Label label="자기소개" />
        <textarea
          className="resume-text-area"
          name="자기소개"
          placeholder="자기소개를 입력하세요."
        />
      </div>
      <div className="work-type-container">
        <button
          className={`resume-submit-btn ${'white'}`}
          onClick={() => navigate('/resume')}
        >
          이력서 임시 저장
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
export default ResumeIntro;
