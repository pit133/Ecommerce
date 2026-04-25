import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import {useState} from "react";

const Container = () => {
  const [pageType, setPageType] = useState("tv");

  const onClickedLink = (link) => {
    setPageType(link);
  }

  return (
    <>
      <Header currentPage={pageType} onClickLink={onClickedLink}/>
      <Content pageType={pageType} />
      <Footer className="container" />
    </>
  )
}

export default Container;