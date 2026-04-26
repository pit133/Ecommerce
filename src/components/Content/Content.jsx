import TVListing from "../../pages/TVListing/TVListing";
import PhoneListing from "../../pages/PhoneListing/PhoneListing";
import LaptopListing from "../../pages/LaptopListing/LaptopListing";
import Cart from "../../pages/Cart/Cart";


const Content = (props) => {
  const {
    pageType,
    products,
    onClickButtonShopping,
    onAddToCart,
    onRemoveFromCart
  } = props

  const onClickedButtonShopping = () => {
    onClickButtonShopping("tv")
  }

  return (
    <>
      {pageType === "tv" && (<TVListing
        products={products}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />)}
      {pageType === "phone" && (<PhoneListing
        products={products}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />)}
      {pageType === "laptop" && (<LaptopListing
        products={products}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />)}
      {pageType === "cart" && (
        <Cart
          products={products}
          onClickedButtonShopping={onClickedButtonShopping}
        />)}
    </>
  )
}

export default Content;