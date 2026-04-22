import ProductCard from "../ProductCart/ProductCard";
import Select from "../Select/Select";
import "./ProductSort.css"

const ProductSort = (props) => {
  const { className, selectLabel, selectOptions, products = [] } = props;

  return (
    <section className={`${className} products`}>
      <div className="products__head">
        <p className="products__count">{products.length} products</p>
        <form className="products__head-form">
          <Select
            className="products__select"
            label={selectLabel}
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
              onAddToCart={() => console.log('Added:', product)}
              onLike={(isLiked) => console.log('Liked:', isLiked)}
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