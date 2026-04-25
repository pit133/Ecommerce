import TVListing from "../../pages/TVListing/TVListing";
import PhoneListing from "../../pages/PhoneListing/PhoneListing";
import LaptopListing from "../../pages/LaptopListing/LaptopListing";
import Cart from "../../pages/Cart/Cart";
import {useEffect} from "react";


const Content = (props) => {
  const {pageType, products, onClickButtonShopping} = props

  let filteredProducts = null

  const filterProducts = (pageType) => {

    if (pageType === "tv") {
      return products.filter(product => product.category === "tv")
    }

    if (pageType === "phone") {
      return products.filter(product => product.category === "phone")
    }

    if (pageType === "laptop") {
      return products.filter(product => product.category === "laptop")
    }
  }

  filteredProducts = filterProducts(pageType);

  const onClickedButtonShopping = () => {
    onClickButtonShopping("tv")
  }

  return (
    <>
      {pageType === "tv" && (<TVListing products={filteredProducts} />)}
      {pageType === "phone" && (<PhoneListing products={filteredProducts} />)}
      {pageType === "laptop" && (<LaptopListing products={filteredProducts} />)}
      {pageType === "cart" && (
        <Cart onClickedButtonShopping={onClickedButtonShopping} />)}
    </>
  )
}

export default Content;