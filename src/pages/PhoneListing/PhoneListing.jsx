import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import "./PhoneListing.css"
import ProductSort from "../../components/ProductSort/ProductSort";


const PhoneListing = (props) => {
  const {className, products, onAddToCart, onRemoveFromCart} = props;
  const phoneBrands = [...new Set(products.map(product => product.brand))];

  const onAddedToCart = (id, count) => {
    onAddToCart(id, count);
  }

  return (
    <div className="laptop-listing">
      <main className="container main">
        <aside className="aside">
          <Filter selectOptions={phoneBrands} />
          <SpecialDeal time={"0:59:59"} />
        </aside>
        <ProductSort
          className="productSort"
          selectLabel={"Sort by:"}
          selectOptions={["Price: High to Low", "Price: Low to High"]}
          products={products}
          onAddToCart={onAddedToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      </main>
    </div>
  )
}

export default PhoneListing;