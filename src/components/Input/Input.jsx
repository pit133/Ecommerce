import './Input.css';
import {useState} from "react";

const Input = (props) => {

  const {className, type, placeholder} = props
  const [value, setValue] = useState("");

  const handleNumberChange = (e) => {
    let inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      if (inputValue.length === 1 && inputValue === '0') {
        setValue('');
      } else {
        setValue(inputValue);
      }
    }
  };

  return (
    <input
      className={`input ${className}`}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      value={value}
      onChange={handleNumberChange}
    />
  )
}

export default Input