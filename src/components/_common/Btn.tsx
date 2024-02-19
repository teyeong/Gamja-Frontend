import { BtnProps } from 'props-type';

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
