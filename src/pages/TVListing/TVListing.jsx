import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import "./TVListing.css"
import ProductSort from "../../components/ProductSort/ProductSort";

const TVListing = (props) => {
  const {className, products, onAddToCart, onRemoveFromCart} = props;

  const tvBrands = [...new Set(products.map(product => product.brand))];

  return (
    <div className="tv-listing">
      <main className="container main">
        <aside className="aside">
          <Filter selectOptions={tvBrands} />
          <SpecialDeal time={"0:59:59"} />
        </aside>
        <ProductSort
          className="productSort"
          selectLabel={"Sort by:"}
          selectOptions={["Price: High to Low", "Price: Low to High"]}
          products={products}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      </main>
    </div>
  )
}

export default TVListing;