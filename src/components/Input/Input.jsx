import './Input.css';

const Input = (props) => {
  const { className, type, placeholder, isNumber, value, onChange } = props;

  const handleNumberChange = (e) => {
    let inputValue = e.target.value;

    if (isNumber) {
      if (/^\d*$/.test(inputValue)) {
        if (inputValue.length === 1 && inputValue === '0') {
          onChange({ target: { value: '' } });
        } else {
          onChange({ target: { value: inputValue } });
        }
      }
    } else {
      onChange(e);
    }
  };

  return (
    <input
      className={`input ${className}`}
      type={type || 'text'}
      placeholder={placeholder}
      value={value || ''}
      onChange={handleNumberChange}
    />
  );
};

export default Input;