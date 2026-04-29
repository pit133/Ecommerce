import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import "./TVListing.css";
import ProductSort from "../../components/ProductSort/ProductSort";

const TVListing = (props) => {
  const {
    products,
    brands,
    filters,
    sortType,
    onAddToCart,
    onRemoveFromCart,
    onApplyFilters,
    onSortChange,
  } = props;

  return (
    <div className="tv-listing">
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
          selectOptions={["Price: Low to High", "Price: High to Low" ]}
          products={products}
          sortType={sortType}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onSortChange={onSortChange}
        />
      </main>
    </div>
  );
};

export default TVListing;