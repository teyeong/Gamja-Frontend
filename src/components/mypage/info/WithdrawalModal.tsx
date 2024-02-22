import Btn from 'components/_common/Btn';
import Modal from 'components/_common/Modal';
import { ModalProps } from 'props-type';

const WithdrawalModal = ({ setModal }: ModalProps) => {
  return (
    <Modal>
      <p className="modal-title">회원탈퇴</p>
      <p className="modal-text withdrawal">정말 탈퇴하시겠습니까?</p>
      <div className="modal-btn-div">
        <Btn
          label="취소"
          onClick={() => setModal(false)}
          styleClass="modal-btn dark-green"
        />
        <Btn
          label="탈퇴"
          onClick={() => (window.location.href = '/')}
          styleClass="modal-btn white"
        />
      </div>
    </Modal>
  );
};

export default WithdrawalModal;
