import "./Select.css"
const Select = (props) => {

  const {className, label, options} = props

  return (
    <>
      <label>{label}</label>
      <select className={`select ${className}`} id="label" name="label">
        <option className="hidden" value=""></option>
        {/*<option className="hidden" value="">Выберите вариант</option>*/}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select;