import { ChildrenProps } from 'props-type';

const Modal = ({ children }: ChildrenProps) => {
  return (
    <div className="modal-bg-div">
      <div className="modal-div">{children}</div>
    </div>
  );
};

export default Modal;
