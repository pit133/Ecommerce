import ProductCard from "../ProductCart/ProductCard";
import Select from "../Select/Select";
import "./ProductSort.css"

const ProductSort = (props) => {
  const { className, selectOptions, products = [] } = props;

  return (
    <section className={`${className} products`}>
      <div className="products__head">
        <p className="products__count">{products.length} products</p>
        <form className="products__head-form">
          <div>Sort by: </div>
          <Select
            className="products__select"
            options={selectOptions}
          />
        </form>
      </div>
      <div className="products__list">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className="products__empty">No products found</p>
        )}
      </div>
    </section>
  )
}

export default ProductSort