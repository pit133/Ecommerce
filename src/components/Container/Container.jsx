import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { useState, useEffect, useMemo } from "react";
import products from "../../data/products";

const Container = () => {
  const [pageType, setPageType] = useState("tv");
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsCount, setCartProductsCount] = useState(0);
  const [filters, setFilters] = useState({
    brand: "All brands",
    minPrice: 0,
    maxPrice: Infinity
  });

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
    setFilters({
      brand: "All brands",
      minPrice: 0,
      maxPrice: Infinity
    });
  };

  const onClickedButtonShopping = () => {
    setPageType("tv");
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const getBaseProductsByCategory = (type) => {
    if (type === "tv") {
      return products.filter(product => product.category === "tv");
    } else if (type === "phone") {
      return products.filter(product => product.category === "phone");
    } else if (type === "laptop") {
      return products.filter(product => product.category === "laptop");
    } else if (type === "cart") {
      return products.filter(product =>
        cartProducts.some(item => item.id === product.id)
      );
    }
    return [];
  };

  const filterProductsByFilters = (baseProducts) => {
    return baseProducts.filter(product => {
      if (filters.brand !== "All brands" && filters.brand && product.brand !== filters.brand) {
        return false;
      }

      if (product.price < filters.minPrice) return false;
      if (product.price > filters.maxPrice) return false;
      return true;
    });
  };

  const getUniqueBrands = (baseProducts) => {
    return ["All brands", ...new Set(baseProducts.map(product => product.brand))];
  };

  const enrichProductsWithCart = (filteredProducts) => {
    return filteredProducts.map(product => {
      const cartItem = cartProducts.find(item => item.id === product.id);
      return {
        ...product,
        isInCart: !!cartItem,
        cartItemCount: cartItem ? cartItem.count : 0
      };
    });
  };

  const getFinalProducts = useMemo(() => {
    const baseProducts = getBaseProductsByCategory(pageType);
    if (pageType === "cart") {
      return enrichProductsWithCart(baseProducts);
    }

    const filteredProducts = filterProductsByFilters(baseProducts);
    const enrichedProducts = enrichProductsWithCart(filteredProducts)

    return enrichedProducts;
  }, [pageType, cartProducts, filters]);

  const currentBrands = useMemo(() => {
    if (pageType === "cart") return [];
    const baseProducts = getBaseProductsByCategory(pageType);
    return getUniqueBrands(baseProducts);
  }, [pageType, products]);

  return (
    <>
      <Header
        currentPage={pageType}
        cartProductsCount={cartProductsCount}
        onClickLink={onClickedLink}
      />
      <Content
        pageType={pageType}
        products={getFinalProducts}
        brands={currentBrands}
        filters={filters}
        onClickButtonShopping={onClickedButtonShopping}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onRemoveProductFromCart={handleRemoveProductFromCart}
        onApplyFilters={handleApplyFilters}
      />
      <Footer className="container" />
    </>
  );
};

export default Container;