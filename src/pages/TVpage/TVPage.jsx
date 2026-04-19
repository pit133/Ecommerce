import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";
import ProductCard from "../../components/ProductCart/ProductCard";

const TVPage = (props) => {
  const {className} = props;
  return (
    <div className="container">
      <Header />
      <main>
        <aside>
          <Filter />
          <SpecialDeal time={"0:53:50"} />
        </aside>
        <section className="products">
          <div className="products__head">
            <p className="products__count">8 products</p>
          </div>
          <div className="products__list">
            <ProductCard
              brand="brand"
              title="sdffffffff"
              price="100"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default TVPage;