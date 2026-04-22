import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import "./TVPage.css"
import ProductSort from "../../components/ProductSort/ProductSort";

import products from "../../data/products";
import Footer from "../../components/Footer/Footer";

const TVPage = (props) => {
  const {className} = props;
  const tvDevices = products.filter(product => product.category === "tv")
  const tvBrands = [...new Set(tvDevices.map(product => product.brand))];

  return (
    <div className="tvpage">
      <Header />
      <main className="container main">
        <aside className="aside">
          <Filter selectOptions = {tvBrands}/>
          <SpecialDeal time={"0:53:50"} />
        </aside>
        <ProductSort className="productSort" selectLabel={"Sort by"} products={tvDevices}/>
      </main>
      <Footer className="container" />
    </div>
  )
}

export default TVPage;