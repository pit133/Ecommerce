import Select from "../Select/Select";
import Input from "../Input/Input";
import "./Filter.css"
import Button from "../Button/Button";

const Filter = (props) => {
  const {className, selectOptions} = props;
  return (
    <div className={`${className} filter`}>
      <h1>Filters</h1>
      <form className="filter__form">
          <div className="filter__input">
            <label>Brand</label>
            <Select
              className="filter__select"
              options={props.selectOptions}
            />
          </div>
          <div className="filter__input">
            <label>Price range</label>
            <div className="filter__input-price">
              <Input className="filter__input-field" placeholder="0" isNumber={true}/>
              <Input className="filter__input-field" placeholder="5000" isNumber={true}/>
            </div>
          </div>
          <Button content="Apply Filters" />
      </form>
    </div>
  )
}

export default Filter