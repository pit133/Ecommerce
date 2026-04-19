import Select from "../Select/Select";
import Input from "../Input/Input";
import "./Filter.css"
import Button from "../Button/Button";

const Filter = (props) => {
  return (
    <div className="filter">
      <h1>Filters</h1>
      <form className="filter__form">
          <div className="filter__input">
            <Select
              className="filter__select"
              label="Brand"
            />
          </div>
          <div className="filter__input">
            <label>Price range</label>
            <div className="filter__input-price">
              <Input />
              <Input />
            </div>
          </div>
          <Button className="filter__button" content="Apply Filters" />
      </form>
    </div>
  )
}

export default Filter