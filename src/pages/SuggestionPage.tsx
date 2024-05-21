import Title from 'components/_common/Title';
import SuggestionForm from 'components/suggestionpage/form/SuggestionForm';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const SuggestionPage = () => {
  const { resumeId } = useParams();

  const { isSignin } = useRecoilValue(SigninStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    }
  }, [isSignin]);

  return (
    <>
      {isSignin && (
        <div className="container">
          <Title label="채용 제안" />
          <SuggestionForm resumeId={resumeId} isEdit={false} />
        </div>
      )}
    </>
  );
};

export default SuggestionPage;
