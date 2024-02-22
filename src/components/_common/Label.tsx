import { LabelProps } from 'props-type';
const Label = ({ label, isRequired }: LabelProps) => {
  return (
    <>
      <div className="input-label-box" style={{ marginBottom: '1rem' }}>
        <p>{label}</p>
        {isRequired && <p className="required">*</p>}
      </div>
    </>
  );
};

export default Label;
