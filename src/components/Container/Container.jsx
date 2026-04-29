import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { useState, useEffect } from "react";
import products from "../../data/products";

const Container = () => {
  const [pageType, setPageType] = useState("tv");
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsCount, setCartProductsCount] = useState(0);

  const calculateTotalCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  useEffect(() => {
    const total = calculateTotalCount(cartProducts);
    setCartProductsCount(total);
  }, [cartProducts]);

  const handleAddToCart = (id) => {
    setCartProducts(prev => {
      const itemInCart = prev.find(item => item.id === id);

      if (itemInCart) {
        return prev.map(item =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prev, { id: id, count: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartProducts(prev => {
      const itemInCart = prev.find(item => item.id === id);

      if (itemInCart.count === 1) {
        return prev.filter(item => item.id !== id);
      } else {
        return prev.map(item =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        );
      }
    });
  };

  const handleRemoveProductFromCart = (id) => {
    setCartProducts(prev => prev.filter(item => item.id !== id));
  };

  const onClickedLink = (link) => {
    setPageType(link);
  };

  const onClickedButtonShopping = () => {
    setPageType("tv");
  };

  const filterProducts = (pageType) => {
    let filteredProducts = [];

    if (pageType === "tv") {
      filteredProducts = products.filter(product => product.category === "tv");
    } else if (pageType === "phone") {
      filteredProducts = products.filter(product => product.category === "phone");
    } else if (pageType === "laptop") {
      filteredProducts = products.filter(product => product.category === "laptop");
    } else if (pageType === "cart") {
      filteredProducts = products.filter(product =>
        cartProducts.some(item => item.id === product.id)
      );
    }

    return filteredProducts.map(product => {
      const cartItem = cartProducts.find(item => item.id === product.id);
      return {
        ...product,
        isInCart: !!cartItem,
        cartItemCount: cartItem ? cartItem.count : 0
      };
    });
  };

  const filteredProducts = filterProducts(pageType);

  return (
    <>
      <Header
        currentPage={pageType}
        cartProductsCount={cartProductsCount}
        onClickLink={onClickedLink}
      />
      <Content
        pageType={pageType}
        products={filteredProducts}
        onClickButtonShopping={onClickedButtonShopping}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onRemoveProductFromCart={handleRemoveProductFromCart}
      />
      <Footer className="container" />
    </>
  );
};

export default Container;