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
            <Select
              className="filter__select"
              label="Brand"
              options={props.selectOptions}
            />
          </div>
          <div className="filter__input">
            <label>Price range</label>
            <div className="filter__input-price">
              <Input placeholder="0"/>
              <Input placeholder="5000"/>
            </div>
          </div>
          <Button content="Apply Filters" />
      </form>
    </div>
  )
}

export default Filter