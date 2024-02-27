import Title from 'components/_common/Title';
import ResumeEdit from 'components/resumepage/ResumeEdit';

const ResumeEditPage = () => {
  return (
    <div className="container">
      <Title label="이력서 작성" />
      <ResumeEdit />
    </div>
  );
};

export default ResumeEditPage;
