import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import {useState} from "react";
import products from "../../data/products";

const Container = () => {
  const [pageType, setPageType] = useState("tv");

  const onClickedLink = (link) => {
    setPageType(link);
  }

  const onClickedButtonShopping = () => {
    setPageType("tv");
  }

  return (
    <>
      <Header
        currentPage={pageType}
        onClickLink={onClickedLink}
      />
      <Content
        pageType={pageType}
        onClickButtonShopping={onClickedButtonShopping}
        products={products}
      />

      <Footer className="container" />
    </>
  )
}

export default Container;