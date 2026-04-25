import products from "../../data/products";
import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import ProductSort from "../../components/ProductSort/ProductSort";

import "./LaptopListing.css"

const LaptopListing = (props) => {
  const {className} = props;
  const laptopDevices = products.filter(product => product.category === "laptop")
  const laptopBrands = [...new Set(laptopDevices.map(product => product.brand))];

  return (
    <div className="laptop-listing">
      <main className="container main">
        <aside className="aside">
          <Filter selectOptions = {laptopBrands}/>
          <SpecialDeal time={"0:59:59"} />
        </aside>
        <ProductSort className="productSort" selectLabel={"Sort by:"} selectOptions={["Price: High to Low","Price: Low to High"]} products={laptopDevices}/>
      </main>
    </div>
  )
}

export default LaptopListing;