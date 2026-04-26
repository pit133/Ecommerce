import Button from "../../components/Button/Button";
import "./Cart.css";

const Cart = (props) => {
  const { className, products, onClickedButtonShopping, onAddToCart, onRemoveFromCart } = props;

  const handleContinueShopping = () => {
    onClickedButtonShopping();
  };

  return (
    <div className={`${className} cart container`}>
      <h1 className="cart__header">Shopping Cart</h1>

      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="cart__product-card">
            {product.images && product.images.length > 0 && (
              <div className="cart__product-card-image">
                <img src={product.images[0]} alt={product.title} />
              </div>
            )}

            <div className="cart__product-card-content">
              <h3 className="cart__card-simple-brand">{product.brand}</h3>
              <h2 className="cart-product-card-title">{product.model}</h2>
              <p className="cart__product-card-price">${product.price.toLocaleString('en-US')}</p>

              <div className="cart__product-card-controls">
                <button
                  className="product-card-simple__btn product-card-simple__btn--minus"
                  onClick={() => onRemoveFromCart(product.id)}
                  // disabled={!onRemoveFromCart}
                >
                  -
                </button>
                <span className="cart__product-card-quantity">
                  {product.cartItemCount}
                </span>
                <button
                  className="product-card-simple__btn product-card-simple__btn--plus"
                  onClick={() => onAddToCart(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="cart__product-card-empty">
          <div>Your cart is empty</div>
          <Button content="Continue Shopping" onClick={handleContinueShopping} />
        </div>
      )}
    </div>
  );
};

export default Cart;