import { InputProps } from 'props-type';

const Input = ({
  label,
  onChange,
  isRequired = false,
  styleClass,
  isWrong = false,
  alertText = '',
  content = '',
  type = 'text',
  placehoder,
}: InputProps) => {
  return (
    <>
      <div className={`input-wrapper ${styleClass}`}>
        <div className="input-label-box">
          <p>{label}</p>
          {isRequired && <p className="required">*</p>}
        </div>
        <div className={`input-box ${isWrong && 'input-red'}`}>
          {content ? (
            <input className="input" disabled defaultValue={content} />
          ) : (
            <input
              className="input"
              onChange={onChange}
              type={type}
              placeholder={placehoder}
            />
          )}
          <p className="alert-text">{alertText}</p>
        </div>
      </div>
    </>
  );
};

export default Input;
