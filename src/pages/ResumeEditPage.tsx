import Title from 'components/_common/Title';
import ResumeEdit from 'components/resumepage/ResumeEdit';

const ResumeEditPage = () => {
  return (
    <div className="container">
      <Title label="인재풀 등록" />
      <ResumeEdit />
    </div>
  );
};

export default ResumeEditPage;
