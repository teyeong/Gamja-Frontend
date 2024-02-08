import { BtnProps } from './Btn.d';

const Btn = ({ label, styleClass, onClick }: BtnProps) => {
  return (
    <>
      <button className={`${styleClass}`} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Btn;
