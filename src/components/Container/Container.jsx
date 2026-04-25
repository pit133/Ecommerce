import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

const Container = () => {
  let pageType = "phone";
  return (
    <>
      <Header />
      <Content pageType={pageType} />
      <Footer className="container" />
    </>
  )
}

export default Container;