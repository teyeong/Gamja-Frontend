import Title from 'components/_common/Title';
import ResumeList from 'components/resumepage/ResumeList';

const ResumeListPage = () => {
  return (
    <div className="container">
      <Title label="이력서 관리" />
      <ResumeList />
    </div>
  );
};

export default ResumeListPage;
