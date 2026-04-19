import "./Select.css"
const Select = (props) => {

  const {className, label} = props

  return (
    <>
      <label>{label}</label>
      <select className={`select ${className}`} id="car" name="car">
        <option className="hidden" value=""></option>
        <option value="tsl">TSL</option>
        <option value="lg">LG</option>
        <option value="hisense">Hisense</option>
        <option value="sony">Sony</option>
        <option value="samsung">Samsung</option>
      </select>
    </>
  )
}

export default Select;