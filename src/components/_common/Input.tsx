import { InputProps } from 'props-type';

const Input = ({
  label,
  onChange,
  isRequired = false,
  styleClass,
  isWrong = false,
  alertText = '',
  defaultValue = '',
  type = 'text',
  placeholder,
  disabled = false,
  isAlertRequired = true,
}: InputProps) => {
  return (
    <>
      <div className={`input-wrapper ${styleClass}`}>
        <div className="input-label-box">
          <p>{label}</p>
          {isRequired && <p className="required">*</p>}
        </div>
        <div className={`input-box ${isWrong && 'input-red'}`}>
          {disabled ? (
            <input
              name={label}
              className="input"
              disabled
              defaultValue={defaultValue}
            />
          ) : (
            <input
              name={label}
              className="input"
              onChange={onChange}
              type={type}
              placeholder={placeholder}
              defaultValue={defaultValue}
            />
          )}
          {isAlertRequired && <p className="alert-text">{alertText}</p>}
        </div>
      </div>
    </>
  );
};

export default Input;
