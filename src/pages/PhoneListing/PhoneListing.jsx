import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import "./PhoneListing.css"
import ProductSort from "../../components/ProductSort/ProductSort";



const PhoneListing = (props) => {
  const {className, products} = props;
  // const phoneDevices = products.filter(product => product.category === "phone")
  const phoneBrands = [...new Set(products.map(product => product.brand))];

  return (
    <div className="laptop-listing">
      <main className="container main">
        <aside className="aside">
          <Filter selectOptions = {phoneBrands}/>
          <SpecialDeal time={"0:59:59"} />
        </aside>
        <ProductSort className="productSort" selectLabel={"Sort by:"} selectOptions={["Price: High to Low","Price: Low to High"]} products={products}/>
      </main>
    </div>
  )
}

export default PhoneListing;