import Button from "../../components/Button/Button";
import "./Cart.css";
import IconButton from "../../components/IconButton/IconButton";

const Cart = (props) => {
  const {
    className,
    products,
    onClickedButtonShopping,
    onAddToCart,
    onRemoveFromCart,
    onRemoveProductFromCart
  } = props;

  const handleContinueShopping = () => {
    onClickedButtonShopping();
  };

  const calculateSubtotal = () => {
    return products.reduce((total, product) => {
      return total + (product.price * (product.cartItemCount || 1));
    }, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.08;
  };

  const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  return (
    <div className={`${className} cart container`}>
      <h1 className="cart__header">Shopping Cart</h1>

      {products && products.length > 0 ? (
        <div className="cart__wrapper">
          <div className="cart__products">
            {products.map((product) => (
              <div key={product.id} className="cart__product-card">
                {product.images && product.images.length > 0 && (
                  <div className="cart__product-card-image">
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                )}

                <div className="cart__product-card-content">
                  <div className="cart__product-card-header">
                    <div>
                      <h3 className="cart__card-simple-brand">{product.brand}</h3>
                      <h2 className="cart-product-card-title">{product.model}</h2>
                    </div>
                    <Button
                      className="cart__product-del-button"
                      content={
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 4H14" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.6666 4V13.3333C12.6666 14 11.9999 14.6667 11.3333 14.6667H4.66659C3.99992 14.6667 3.33325 14 3.33325 13.3333V4" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.33325 3.99967V2.66634C5.33325 1.99967 5.99992 1.33301 6.66659 1.33301H9.33325C9.99992 1.33301 10.6666 1.99967 10.6666 2.66634V3.99967" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.66675 7.33301V11.333" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.33325 7.33301V11.333" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      }
                      onClick={() => onRemoveProductFromCart(product.id)}
                    />
                  </div>
                  <p className="cart__product-card-price">${(product.price * (product.cartItemCount || 1)).toLocaleString('en-US')}</p>

                  <div className="cart__product-card-controls">
                    <Button
                      className="product-card-simple__btn product-card-simple__btn--minus"
                      onClick={() => onRemoveFromCart(product.id)}
                      content="-"
                    />
                    <span className="cart__product-card-quantity">
                      {product.cartItemCount}
                    </span>
                    <Button
                      className="product-card-simple__btn product-card-simple__btn--plus"
                      onClick={() => onAddToCart(product.id)}
                      content="+"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="cart__summary">
            <h2 className="cart__summary-title">Order Summary</h2>

            <div className="cart__summary-row">
              <span className="cart__summary-label">Subtotal</span>
              <span className="cart__summary-value">${subtotal.toLocaleString('en-US')}</span>
            </div>

            <div className="cart__summary-row">
              <span className="cart__summary-label">Tax (8%)</span>
              <span className="cart__summary-value">${tax.toLocaleString('en-US')}</span>
            </div>

            <div className="cart__summary-row">
              <span className="cart__summary-label">Shipping</span>
              <span className="cart__summary-value cart__summary-shipping">Calculated at checkout</span>
            </div>

            <div className="cart__summary-row cart__summary-total">
              <span className="cart__summary-label">Total</span>
              <span className="cart__summary-value">${total.toLocaleString('en-US')}</span>
            </div>

            <div className="cart__summary-buttons">
              <Button
                className="cart__checkout-btn"
                content="Proceed to Checkout"
                onClick={() => console.log('Proceed to checkout')}
              />
              <Button
                className="cart__continue-btn"
                content="Continue Shopping"
                onClick={handleContinueShopping}
              />
            </div>
          </div>
        </div>
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