import "./Select.css"

const Select = (props) => {
  const { className, label, options, value, onChange } = props;

  return (
    <div className="select-wrapper">
      {label && <label>{label}</label>}
      <select
        className={`select ${className || ''}`}
        value={value || ''}
        onChange={onChange}
      >
        {/*<option value="">All Brands</option>*/}
        {options?.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;