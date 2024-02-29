import Title from 'components/_common/Title';
import InfoEdit from 'components/infoeditpage/InfoEdit';

const InfoEditPage = () => {
  return (
    <div className="infoedit-main-div">
      <Title label="기본 정보 수정" />
      <InfoEdit />
    </div>
  );
};

export default InfoEditPage;
