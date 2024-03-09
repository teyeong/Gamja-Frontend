import { EditModalProps } from 'props-type';
import { useMediaQuery } from 'react-responsive';
const EditModal = ({ setIsOpen }: EditModalProps) => {
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });
  return (
    <>
      {isMobile && <div className="modal-bg-div"></div>}
      <div className="edit-modal-container">
        <div className="edit-modal-text">이력서 이름 변경</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div className="edit-modal-text">사본 만들기</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div className="edit-modal-text">다운로드</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div className="edit-modal-text-alert">이력서 삭제</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div
          className="edit-modal-text-cancel"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          취소
        </div>
      </div>
    </>
  );
};
export default EditModal;
