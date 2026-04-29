import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import "./PhoneListing.css";
import ProductSort from "../../components/ProductSort/ProductSort";

const PhoneListing = (props) => {
  const {
    products,
    brands,
    filters,
    onAddToCart,
    onRemoveFromCart,
    onApplyFilters
  } = props;

  return (
    <div className="phone-listing">
      <main className="container main">
        <aside className="aside">
          <Filter
            selectOptions={brands}
            onApplyFilters={onApplyFilters}
            initialFilters={filters}
          />
          <SpecialDeal time={"0:59:59"} />
        </aside>
        <ProductSort
          className="productSort"
          selectLabel="Sort by:"
          selectOptions={["Price: High to Low", "Price: Low to High"]}
          products={products}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      </main>
    </div>
  );
};

export default PhoneListing;