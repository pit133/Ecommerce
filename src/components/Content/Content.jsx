import TVListing from "../../pages/TVListing/TVListing";
import PhoneListing from "../../pages/PhoneListing/PhoneListing";
import LaptopListing from "../../pages/LaptopListing/LaptopListing";
import Cart from "../../pages/Cart/Cart";

const Content = (props) => {
  const {
    pageType,
    products,
    brands,
    filters,
    sortType,
    onClickButtonShopping,
    onAddToCart,
    onRemoveFromCart,
    onRemoveProductFromCart,
    onApplyFilters,
    onSortChange,
  } = props;

  const onClickedButtonShopping = () => {
    onClickButtonShopping("tv");
  };

  return (
    <>
      {pageType === "tv" && (
        <TVListing
          products={products}
          brands={brands}
          filters={filters}
          sortType={sortType}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onApplyFilters={onApplyFilters}
          onSortChange={onSortChange}
        />
      )}
      {pageType === "phone" && (
        <PhoneListing
          products={products}
          brands={brands}
          filters={filters}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onApplyFilters={onApplyFilters}
        />
      )}
      {pageType === "laptop" && (
        <LaptopListing
          products={products}
          brands={brands}
          filters={filters}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onApplyFilters={onApplyFilters}
        />
      )}
      {pageType === "cart" && (
        <Cart
          products={products}
          onClickedButtonShopping={onClickedButtonShopping}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onRemoveProductFromCart={onRemoveProductFromCart}
        />
      )}
    </>
  );
};

export default Content;