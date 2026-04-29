import Select from "../Select/Select";
import Input from "../Input/Input";
import "./Filter.css";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

const Filter = (props) => {
  const { className, selectOptions, onApplyFilters, initialFilters } = props;

  const [minPrice, setMinPrice] = useState(initialFilters?.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(initialFilters?.maxPrice > 5000 ? "5000" : initialFilters?.maxPrice);
  const [selectedBrand, setSelectedBrand] = useState(initialFilters?.brand || "All brands");

  useEffect(() => {
    if (initialFilters) {
      setSelectedBrand(initialFilters.brand || "All brands");
      setMinPrice(initialFilters.minPrice || "");
      setMaxPrice(initialFilters.maxPrice > 5000 ? "5000" : initialFilters.maxPrice);
    }
  }, [initialFilters]);

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters({
        brand: selectedBrand,
        minPrice: minPrice ? parseInt(minPrice) : 0,
        maxPrice: maxPrice ? parseInt(maxPrice) : 5000,
      });
    }
  };

  return (
    <div className={`${className} filter`}>
      <h1>Filters</h1>
      <form className="filter__form" onSubmit={(e) => e.preventDefault()}>
        <div className="filter__input">
          <label>Brand</label>
          <Select
            className="filter__select"
            options={selectOptions}
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
        </div>
        <div className="filter__input">
          <label>Price range</label>
          <div className="filter__input-price">
            <Input
              className="filter__input-field"
              placeholder="Min"
              isNumber={true}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <Input
              className="filter__input-field"
              placeholder="Max"
              isNumber={true}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <Button content="Apply Filters" onClick={handleApplyFilters} />
      </form>
    </div>
  );
};

export default Filter;