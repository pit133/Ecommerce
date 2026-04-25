import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import "./TVListing.css"
import ProductSort from "../../components/ProductSort/ProductSort";

import products from "../../data/products";


const TVListing = (props) => {
  const {className} = props;
  const tvDevices = products.filter(product => product.category === "tv")
  const tvBrands = [...new Set(tvDevices.map(product => product.brand))];

  return (
    <div className="tv-listing">
      <main className="container main">
        <aside className="aside">
          <Filter selectOptions = {tvBrands}/>
          <SpecialDeal time={"0:59:59"} />
        </aside>
        <ProductSort className="productSort" selectLabel={"Sort by:"} selectOptions={["Price: High to Low","Price: Low to High"]} products={tvDevices}/>
      </main>
    </div>
  )
}

export default TVListing;