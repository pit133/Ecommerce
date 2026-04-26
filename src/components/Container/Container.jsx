import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import {useState} from "react";
import products from "../../data/products";

const Container = () => {
  const [pageType, setPageType] = useState("tv");
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (id) => {
    const itemInCart = cartProducts.find(item => item.id === id);

    if (itemInCart) {
      setCartProducts(cartProducts.map(item => item.id === id ? {
        ...item,
        count: item.count + 1
      } : item));
    } else {
      setCartProducts([...cartProducts, {id: id, count: 1}]);
    }
  }

  const handleRemoveFromCart = (id) => {
    const itemInCart = cartProducts.find(item => item.id === id);

    if (itemInCart.count === 1) {
      setCartProducts(cartProducts.filter(item => item.id !== id));
    } else {
      setCartProducts(cartProducts.map(item => item.id === id ? {
        ...item,
        count: item.count - 1
      } : item));
    }
  };


  const onClickedLink = (link) => {
    setPageType(link);
  }

  const onClickedButtonShopping = () => {
    setPageType("tv");
  }

  const filterProducts = (pageType) => {

    let filteredProducts = [];

    if (pageType === "tv") {
      filteredProducts = products.filter(product => product.category === "tv")
    }

    if (pageType === "phone") {
      filteredProducts = products.filter(product => product.category === "phone")
    }

    if (pageType === "laptop") {
      filteredProducts = products.filter(product => product.category === "laptop")
    }

    if (pageType === "cart") {
      filteredProducts = products
        .filter(product => cartProducts
          .find(item => item.id === product.id))
    }

    return filteredProducts.map(product => {
      const cartItem = cartProducts.find(item => item.id === product.id);
      return {
        ...product,
        isInCart: !!cartItem,
        cartItemCount: cartItem ? cartItem.count : 0
      };
    });

  }

  const filteredProducts = filterProducts(pageType)


  return (<>
      <Header
        currentPage={pageType}
        onClickLink={onClickedLink}
      />
      <Content
        pageType={pageType}
        onClickButtonShopping={onClickedButtonShopping}
        products={filteredProducts}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <Footer className="container" />
    </>)
}

export default Container;